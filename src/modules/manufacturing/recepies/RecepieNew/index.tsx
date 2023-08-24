import { useEffect, useState } from "react"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { useForm, yupResolver } from "@mantine/form"
import { useRecepieCreateMutation, UpdateRecepie, useAutherQuery, UpdateRecepieItem } from "gql/generated/hooks"
import { showNotification } from "@mantine/notifications"
import { getObjectFromLocalStorage } from "common/localStorage"
import PageLoader from "components/PageLoader"
import { PageProps } from "types/types"
import RecepieNewHTML from "./RecepieNewHTML"
import { INavTrailProps } from "components/NavTrails"
import Page from "components/Page"
import PageHeader from "components/PageHeader"

const schema = Yup.object().shape({
    name: Yup.string().min(2, "Organization Name should have at least 2 letters"),
    orgID: Yup.string().min(2, "Invalid org ID"),
})

export default function RecepieNew(props: PageProps) {
    const router = useRouter()
    const [newRecepie] = useRecepieCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgID, setOrgID] = useState("")

    const navTrails: INavTrailProps[] = [
        { title: "Dashboard", href: "/" },
        { title: "Recepies", href: "/manufacturing/recepies" },
        { title: "New", href: "#" },
    ]

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            orgID: "",
            skuID: 0,
            units: 0,
	        unitOfMeasure: "",
            items: [
                {
                    skuID: 0,
                    units: 0,
                    unitOfMeasure: "",
                }
            ],

            orgName: "",
            skuName: ""
        },
    })

    // get org uid from local storage
    useEffect(() => {
        const obj = getObjectFromLocalStorage("org")
        setOrgID(obj.id)
        if (obj.id != "" && obj.name) {
            form.values.orgID = obj.id!
            form.values.orgName = obj.name!
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
            form.setValues({ orgID: authData.data.auther.orgID })
        }
        setAutherLoaded(true)
    }

    const handleSubmit = () => {
        let input: UpdateRecepie = {
            orgID: form.values.orgID,
            skuID: form.values.skuID,
            items: [],
        }

        for(let i = 0; i < form.values.items.length; i++) {
            let item: UpdateRecepieItem = {
                skuID: form.values.items[i].skuID,
                units: form.values.items[i].units,
                unitOfMeasure: form.values.items[i].unitOfMeasure,
            }
            input.items?.push(item)
        }

        newRecepie({
            variables: {input}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Recepie ${res.data.purchaseOrderCreate.code} Created`,
            })
            router.push(`/manufacturing/recepies/${res.data.purchaseOrderCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push("/manufacturing/recepies")
    }

    return (
        <Page navTrails={navTrails} >
        <PageHeader title={props.title!} />
            <RecepieNewHTML
                auther={authData.data?.auther!}
                orgID={orgID}
                form={form}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
            />
        </Page>
    )
}
