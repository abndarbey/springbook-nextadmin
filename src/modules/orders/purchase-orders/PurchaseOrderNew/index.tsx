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
    orgID: Yup.string().min(2, "Invalid org ID"),
})

export default function PurchaseOrderNew(props: PageProps) {
    const router = useRouter()
    const [newPurchaseOrder] = usePurchaseOrderCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgID, setOrgID] = useState("")

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Purchase Orders", href: "/procurements/purchase-orders" },
        { title: "New", href: "#" },
    ]

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            buyerID: "",
            sellerID: null,

            details: {
                warehouseID: null,
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
                    skuID: null,
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
        setOrgID(obj.id)
        if (obj.id != "" && obj.name) {
            form.values.buyerID = obj.id!
            form.values.buyerName = obj.name!
        }
    }, [orgID, form])

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
            form.setValues({ buyerID: authData.data.auther.orgID })
        }
        setAutherLoaded(true)
    }

    const handleSubmit = () => {
        let input: UpdatePurchaseOrder = {
            buyerID: form.values.buyerID,
            sellerID: form.values.sellerID,
            details: form.values.details,
            items: [],
        }

        for(let i = 0; i < form.values.items.length; i++) {
            let item: UpdatePurchaseOrderItem = {
                skuID: form.values.items[i].skuID,
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
                orgID={orgID}
                form={form}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
            />
        </Page>
    )
}
