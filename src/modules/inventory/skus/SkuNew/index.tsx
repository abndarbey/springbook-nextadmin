import { useEffect, useState } from "react"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { useForm, yupResolver } from "@mantine/form"
import { useSkuCreateMutation, UpdateSku, SkuCatalogue, Organization, useAutherQuery } from "gql/generated/hooks"
import { showNotification } from "@mantine/notifications"
import { getObjectFromLocalStorage } from "common/localStorage"
import PageLoader from "components/PageLoader"
import { PageProps } from "types/types"
import SkuNewHTML from "./SkuNewHTML"

const schema = Yup.object().shape({
    name: Yup.string().min(2, "Organization Name should have at least 2 letters"),
    orgID: Yup.string().min(2, "Invalid org ID"),
})

export default function SkuNew(props: PageProps) {
    const router = useRouter()
    const [newSku] = useSkuCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgID, setOrgID] = useState("")

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            skuID: "",
            orgID: "",

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

    const handleSkuCatalogueSelect = (item: SkuCatalogue | undefined) => {
        if (item) {
            form.values.skuID = item?.id!
            form.values.skuName = item?.name!
        }
    }

    const handleSubmit = () => {
        var newSkuInput: UpdateSku = {
            uid: form.values.skuID,
            orgID: form.values.orgID,
        }

        newSku({
            variables: {input: newSkuInput}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Sku ${res.data.skuCreate.name} Created`,
            })
            router.push("/inventory/skus")
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push("/inventory/skus")
    }

    return (
        <SkuNewHTML
            title={props.title!}
            auther={authData.data?.auther!}
            orgID={orgID}
            form={form}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            handleOrgSelect={handleOrgSelect}
            handleSkuCatalogueSelect={handleSkuCatalogueSelect}
        />
    )
}
