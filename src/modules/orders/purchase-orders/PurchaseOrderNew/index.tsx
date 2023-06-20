import { useEffect, useState } from "react"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { useForm, yupResolver } from "@mantine/form"
import { usePurchaseOrderCreateMutation, UpdatePurchaseOrder, Organization, useAutherQuery, Contact, Warehouse, UpdatePurchaseOrderItem } from "gql/generated/hooks"
import { showNotification } from "@mantine/notifications"
import { getObjectFromLocalStorage } from "common/localStorage"
import PageLoader from "components/PageLoader"
import { PageProps } from "types/types"
import PurchaseOrderNewHTML from "./PurchaseOrderNewHTML"
import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"

const schema = Yup.object().shape({
    name: Yup.string().min(2, "Organization Name should have at least 2 letters"),
    orgUID: Yup.string().min(2, "Invalid org UID"),
})

export default function PurchaseOrderNew(props: PageProps) {
    const router = useRouter()
    const [newPurchaseOrder] = usePurchaseOrderCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgUID, setOrgUID] = useState("")

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Purchase Orders", href: "/procurements/purchase-orders" },
        { title: "New", href: "#" },
    ]

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            buyerUID: "",
            sellerUID: null,

            details: {
                warehouseUID: null,
                shippingAddress: "",
                city: "",
                country: "",
                pincode: "",

                currency: "",
                shippingMethod: "",
                incoterm: "",
                notes: "",
                buyerMessage: "",
            },
            items: [
                {
                    skuUID: null,
                    units: 0,
                    unitCost: 0,
                    unitOfMeasure: "",
                }
            ],

            buyerName: "",
            sellerName: "",
            warehouseName: ""
        },
    })

    // get org uid from local storage
    useEffect(() => {
        const obj = getObjectFromLocalStorage("org")
        setOrgUID(obj.uid)
        if (obj.uid != "" && obj.name) {
            form.values.buyerUID = obj.uid!
            form.values.buyerName = obj.name!
        }
    }, [orgUID, form])

    // load auther
    const authData = useAutherQuery()
    if (authData.loading) {
        return (
            <PageLoader />
        )
    }
    if (authData.error) {
        showNotification({
            disallowClose: false,
            color: "red",
            message: authData.error.message,
        })
        return <PageLoader isError={true} />
    }
    if (authData.data && !autherLoaded) {
        if (!authData.data.auther.isAdmin) {
            form.setValues({ buyerUID: authData.data.auther.orgUID })
        }
        setAutherLoaded(true)
    }

    const handleSubmit = () => {
        let input: UpdatePurchaseOrder = {
            buyerUID: form.values.buyerUID,
            sellerUID: form.values.sellerUID,
            details: form.values.details,
            items: [],
        }

        for(let i = 0; i < form.values.items.length; i++) {
            let item: UpdatePurchaseOrderItem = {
                skuUID: form.values.items[i].skuUID,
                units: form.values.items[i].units,
                unitCost: form.values.items[i].unitCost,
                unitOfMeasure: form.values.items[i].unitOfMeasure,
            }
            input.items?.push(item)
        }

        newPurchaseOrder({
            variables: {input}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Purchase Order ${res.data.purchaseOrderCreate.code} Created`,
            })
            router.push(`/procurements/purchase-orders/${res.data.purchaseOrderCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push("/procurements/purchase-orders")
    }

    return (
        <Page navTrails={navTrails} >
        <PageHeader title={props.title!} />
            <PurchaseOrderNewHTML
                auther={authData.data?.auther!}
                orgUID={orgUID}
                form={form}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
            />
        </Page>
    )
}
