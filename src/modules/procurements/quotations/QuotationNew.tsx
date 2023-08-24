import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { TextInput } from '@mantine/core'
import { useDepartmentCreateMutation, UpdateDepartment, Organization } from 'gql/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import { useState } from 'react'
import { PageProps } from 'types/types'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Departments', href: '/company/departments' },
    { title: 'New', href: '#' },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgID: Yup.string().min(2, 'Invalid org ID'),
})

export default function DepartmentNew(props: PageProps) {
    const router = useRouter()
    const [newDept] = useDepartmentCreateMutation({})
    const [orgModalOpened, setOrgModalOpened] = useState(false)

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            name: '',
            orgID: '',

            orgName: '',
        },
    })

    const handleOrgSelect = (item: Organization) => {
        form.values.orgID = item.id!
        form.values.orgName = item.name!
    }

    const handleSubmit = () => {
        var newDeptInput: UpdateDepartment = {
            name: form.values.name,
            orgID: form.values.orgID,
        }

        newDept({
            variables: {input: newDeptInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Department ${res.data.departmentCreate.name} Created`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push(`/company/departments/${res.data.departmentCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push('/company/departments')
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title!} />
            <FormCard
                submitButtonName='Create'
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
