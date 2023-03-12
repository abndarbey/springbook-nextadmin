import { useEffect, useState } from "react"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { useForm, yupResolver } from "@mantine/form"
import { showNotification } from "@mantine/notifications"
import { useBatchCreateMutation, UpdateBatch, BatchCatalogue, Organization, useAutherQuery } from "@lib/generated/hooks"

import { getObjectFromLocalStorage } from "common/localStorage"
import PageLoader from "components/PageLoader"
import { PageProps } from "types/types"
import BatchNewHTML from "./BatchNewHTML"

const schema = Yup.object().shape({
    name: Yup.string().min(2, "Organization Name should have at least 2 letters"),
    orgUID: Yup.string().min(2, "Invalid org UID"),
})

export default function BatchNew(props: PageProps) {
    const router = useRouter()
    const [newBatch] = useBatchCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgUID, setOrgUID] = useState("")

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            batchUID: "",
            orgUID: "",

            orgName: "",
            batchNumber: "",
        },
    })

    // get org uid from local storage
    useEffect(() => {
        const obj = getObjectFromLocalStorage("org")
        setOrgUID(obj.uid)
        if (obj.uid != "" && obj.name) {
            form.values.orgUID = obj.uid!
            form.values.orgName = obj.name!
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

    const handleBatchCatalogueSelect = (item: BatchCatalogue | undefined) => {
        if (item) {
            form.values.batchUID = item?.uid!
            form.values.batchNumber = item?.batchNumber!
        }
    }

    const handleSubmit = () => {
        var newBatchInput: UpdateBatch = {
            uid: form.values.batchUID,
            orgUID: form.values.orgUID,
        }

        newBatch({
            variables: {input: newBatchInput}
        }).then((res: any) => {
            showNotification({
                disallowClose: false,
                color: "green",
                message: `Batch ${res.data.batchCreate.batchNumber} Created`,
            })
            router.push("/inventory/batches")
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push("/inventory/batches")
    }

    return (
        <BatchNewHTML
            title={props.title!}
            auther={authData.data?.auther!}
            orgUID={orgUID}
            form={form}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            handleOrgSelect={handleOrgSelect}
            handleBatchCatalogueSelect={handleBatchCatalogueSelect}
        />
    )
}
