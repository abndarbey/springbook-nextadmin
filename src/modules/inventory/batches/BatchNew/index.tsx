import { useEffect, useState } from "react"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { useForm, yupResolver } from "@mantine/form"
import { showNotification } from "@mantine/notifications"
import { useBatchCreateMutation, UpdateBatch, BatchCatalogue, Organization, useAutherQuery } from "gql/generated/hooks"

import { getObjectFromLocalStorage } from "common/localStorage"
import PageLoader from "components/PageLoader"
import { PageProps } from "types/types"
import BatchNewHTML from "./BatchNewHTML"

const schema = Yup.object().shape({
    name: Yup.string().min(2, "Organization Name should have at least 2 letters"),
    orgID: Yup.string().min(2, "Invalid org ID"),
})

export default function BatchNew(props: PageProps) {
    const router = useRouter()
    const [newBatch] = useBatchCreateMutation({})
    const [autherLoaded, setAutherLoaded] = useState(false)
    const [orgID, setOrgID] = useState("")

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            batchID: "",
            orgID: "",

            orgName: "",
            batchNumber: "",
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

    const handleBatchCatalogueSelect = (item: BatchCatalogue | undefined) => {
        if (item) {
            form.values.batchID = item?.id!
            form.values.batchNumber = item?.batchNumber!
        }
    }

    const handleSubmit = () => {
        var newBatchInput: UpdateBatch = {
            uid: form.values.batchID,
            orgID: form.values.orgID,
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
            orgID={orgID}
            form={form}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            handleOrgSelect={handleOrgSelect}
            handleBatchCatalogueSelect={handleBatchCatalogueSelect}
        />
    )
}
