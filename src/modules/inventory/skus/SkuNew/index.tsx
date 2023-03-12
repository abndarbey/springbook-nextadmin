import { useEffect, useState } from "react"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { useForm, yupResolver } from "@mantine/form"
import { useSkuCreateMutation, UpdateSku, SkuCatalogue, Organization, useAutherQuery } from "@lib/generated/hooks"
import { showNotification } from "@mantine/notifications"
import { getOrgFromLocalStorage } from "common/localStorage"
import PageLoader from "components/PageLoader"
import { PageProps } from "types/types"
import SkuNewHTML from "./SkuNewHTML"

const schema = Yup.object().shape({
    name: Yup.string().min(2, "Organization Name should have at least 2 letters"),
    orgUID: Yup.string().min(2, "Invalid org UID"),
})

export default function SkuNew(props: PageProps) {
    const router = useRouter()
    const [newSku] = useSkuCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgUID, setOrgUID] = useState("")

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            skuUID: "",
            orgUID: "",

            orgName: "",
            skuName: "",
        },
    })

    // get org uid from local storage
    useEffect(() => {
        const orgObj = getOrgFromLocalStorage()
        setOrgUID(orgObj.uid)
        if (orgObj.uid != "" && orgObj.name) {
            form.values.orgUID = orgObj.uid!
            form.values.orgName = orgObj.name!
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
            form.setValues({ orgUID: authData.data.auther.orgUID })
        }
        setAutherLoaded(true)
    }

    const handleOrgSelect = (item: Organization) => {
        if (item) {
            form.values.orgUID = item.uid!
            form.values.orgName = item.name!
        }
    }

    const handleSkuCatalogueSelect = (item: SkuCatalogue | undefined) => {
        if (item) {
            form.values.skuUID = item?.uid!
            form.values.skuName = item?.name!
        }
    }

    const handleSubmit = () => {
        var newSkuInput: UpdateSku = {
            uid: form.values.skuUID,
            orgUID: form.values.orgUID,
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
            orgUID={orgUID}
            form={form}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            handleOrgSelect={handleOrgSelect}
            handleSkuCatalogueSelect={handleSkuCatalogueSelect}
        />
    )
}
