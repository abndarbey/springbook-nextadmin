import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { TextInput } from '@mantine/core'
import { useDepartmentUpdateMutation, UpdateDepartment, Organization, useDepartmentQuery } from 'gql/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import { useState } from 'react'
import PageLoader from 'components/PageLoader'

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgID: Yup.string().min(2, 'Invalid org ID'),
})

interface IDepartmentEditProps {
    code?: any
}

export default function DepartmentEdit(props: IDepartmentEditProps) {
    const router = useRouter()
    const [updateDept] = useDepartmentUpdateMutation({})
    const [formData, setFormData] = useState(false)
    const [orgModalOpened, setOrgModalOpened] = useState(false)

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'Departments', href: '/company/departments' },
        { title: props.code, href: `/company/departments/${props.code}` },
        { title: 'Edit', href: '#' },
    ]

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            name: '',
            orgID: '',

            orgName: '',
        },
    })

    // fetch data
    const { data, loading, error } = useDepartmentQuery(
        { variables: { code: props.code } }
    )
    if (loading) {
        return (
            <PageLoader />
        )
    }
    if (!loading && error) {
        showNotification({
            disallowClose: false,
            color: 'red',
            message: error.message,
        })
        return <PageLoader isError={true} />
    }
    if (data && !formData) {
        form.setValues(
            {
                name: data.department?.name!,
                orgID: data.department.organization?.id,
                orgName: data.department.organization?.name!
            }
        )
        setFormData(true)
    }

    const handleOrgSelect = (item: Organization) => {
        form.values.orgID = item.id!
        form.values.orgName = item.name!
    }

    const handleSubmit = () => {
        var updateDeptInput: UpdateDepartment = {
            name: form.values.name,
            orgID: form.values.orgID,
        }

        updateDept({
            variables: {id: data?.department.id!, input: updateDeptInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Department ${res.data.departmentUpdate.name} Updated`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push(`/company/departments/${res.data.departmentUpdate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push(`/company/departments/${props.code}`)
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title='New Department' />
            <FormCard
                submitButtonName='Update'
                handleSubmit={form.onSubmit(handleSubmit)}
                handleCancel={handleCancel}
            >
                <OrgSelectModal
                    opened={orgModalOpened}
                    setOpened={setOrgModalOpened}
                    handleSelect={handleOrgSelect}
                />
                <TextInput
                    label="Organization"
                    placeholder="Select Organization"
                    name="organization"
                    disabled={true}
                    onClick={() => setOrgModalOpened(true)}
                    {...form.getInputProps('orgName')}
                />
                <TextInput
                    label="Name"
                    placeholder="Name"
                    mt="md"
                    name="name"
                    {...form.getInputProps('name')}
                />
            </FormCard>
        </Page>
    )
}
