import { useRouter } from "next/router"
import Page from "components/Page"
import { INavTrailProps } from "components/NavTrails"
import * as Yup from "yup"
import { useForm, yupResolver } from "@mantine/form"
import { useBatchCatalogueCreateMutation, UpdateBatchCatalogue, Organization, useAutherQuery, SkuCatalogue } from "gql/generated/hooks"
import { showNotification } from "@mantine/notifications"

import PageHeader from "components/PageHeader"
import { useEffect, useState } from "react"
import { PageProps } from "types/types"
import PageLoader from "components/PageLoader"
import { getObjectFromLocalStorage } from "common/localStorage"
import BatchCatNewHTML from "./BatchCatNewHTML"

const navTrails: INavTrailProps[] = [
    { title: "Dashboard", href: "/" },
    { title: "Batch Catalogues", href: "/catalogues/batches" },
    { title: "New", href: "#" },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, "Organization Name should have at least 2 letters"),
    orgID: Yup.string().min(2, "Invalid org ID"),
})

export default function BatchCatalogueNew(props: PageProps) {
    const router = useRouter()
    const [newObj] = useBatchCatalogueCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgID, setOrgID] = useState("")

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            orgID: "",
            skuID: "",
            batchNumber: "",
            description: "",
            productionDate: "",
            expiryDate: "",

            orgName: "",
            skuName: "",
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

    const handleSkuSelect = (item: SkuCatalogue) => {
        if (item) {
            form.values.skuID = item.id!
            form.values.skuName = item.name!
        }
    }

    const handleSubmit = () => {
        var newObjInput: UpdateBatchCatalogue = {
            orgID: form.values.orgID,
            skuID: form.values.skuID,
            batchNumber: form.values.batchNumber,
            description: form.values.description,
            productionDate: form.values.productionDate,
            expiryDate: form.values.expiryDate,
        }

        newObj({
            variables: {input: newObjInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Batch Catalogue ${res.data.batchCatalogueCreate.name} Created`
            
            showNotification({
                disallowClose: false,
                color: "green",
                message: welcomeMsg,
            })
            router.push(`/catalogues/batches/${res.data.batchCatalogueCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push("/catalogues/batches")
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} />
            <BatchCatNewHTML
                auther={authData.data?.auther!}
                orgID={orgID}
                form={form}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
                handleOrgSelect={handleOrgSelect}
                handleSkuSelect={handleSkuSelect}
            />
        </Page>
    )
}
