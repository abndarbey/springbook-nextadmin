import { useRouter } from "next/router"
import Page from "components/Page"
import { INavTrailProps } from "components/NavTrails"
import * as Yup from "yup"
import { useForm, yupResolver } from "@mantine/form"
import { useSkuCatalogueCreateMutation, UpdateSkuCatalogue, Organization, useAutherQuery } from "gql/generated/hooks"
import { showNotification } from "@mantine/notifications"

import PageHeader from "components/PageHeader"
import { useEffect, useState } from "react"
import { PageProps } from "types/types"
import PageLoader from "components/PageLoader"
import { getObjectFromLocalStorage } from "common/localStorage"
import SkuCatNewHTML from "./SkuCatNewHTML"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Sku Catalogues", href: "/catalogues/skus" },
    { title: "New", href: "#" },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, "Organization Name should have at least 2 letters"),
    orgID: Yup.string().min(2, "Invalid org ID"),
})

export default function SkuCatalogueNew(props: PageProps) {
    const router = useRouter()
    const [newObj] = useSkuCatalogueCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgID, setOrgID] = useState("")

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            orgID: "",
            name: "",
            hsnCode: "",
            brand: "",
            description: "",
            ingredients: "",
            weight: "",
            weightUnit: "",

            orgName: "",
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

    const handleOrgSelect = (item: Organization) => {
        if (item) {
            form.values.orgID = item.id!
            form.values.orgName = item.name!
        }
    }

    const handleSubmit = () => {
        var newObjInput: UpdateSkuCatalogue = {
            orgID: form.values.orgID,
            name: form.values.name,
            hsnCode: form.values.hsnCode,
            brand: form.values.brand,
            description: form.values.description,
            ingredients: form.values.ingredients,
            weight: form.values.weight,
            weightUnit: form.values.weightUnit,
        }

        newObj({
            variables: {input: newObjInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Sku Catalogue ${res.data.skuCatalogueCreate.name} Created`
            
            showNotification({
                disallowClose: false,
                color: "green",
                message: welcomeMsg,
            })
            router.push(`/catalogues/skus/${res.data.skuCatalogueCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push("/catalogues/skus")
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} />
            <SkuCatNewHTML
                auther={authData.data?.auther!}
                orgID={orgID}
                form={form}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
                handleOrgSelect={handleOrgSelect}
            />
        </Page>
    )
}
