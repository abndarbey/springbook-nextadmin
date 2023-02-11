import { Fragment, useState } from 'react'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import { useForm, yupResolver } from '@mantine/form'
import { TextInput } from '@mantine/core'
import { useRoleCreateMutation, UpdateRole, Department, Organization } from '@lib/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import DepartmentSelectModal from 'common/select-table/DepartmentSelectModal'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Roles', href: '/company/roles' },
    { title: 'New', href: '#' },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

export default function RoleNew() {
    const router = useRouter()
    const [newRole] = useRoleCreateMutation({})
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [deptModalOpened, setDeptModalOpened] = useState(false)

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            name: '',
            isManagement: false,
            departmentID: '',
            orgUID: '',

            orgName: '',
            departmentName: '',
        },
    })

    const handleOrgSelect = (item: Organization) => {
        form.values.orgUID = item.uid!
        form.values.orgName = item.name!
    }

    const handleDepartmentSelect = (item: Department | undefined) => {
        if (item) {
            form.values.departmentID = item?.id!
            form.values.departmentName = item?.name!
        }
    }

    const handleSubmit = () => {
        var newRoleInput: UpdateRole = {
            name: form.values.name,
            departmentID: form.values.departmentID,
            orgUID: form.values.orgUID,
        }

        newRole({
            variables: {input: newRoleInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Role ${res.data.roleCreate.name} Created`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push('/company/roles')
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push('/company/roles')
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title='New Role' />
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
                {form.values.orgUID != "" &&
                    <DepartmentSelectModal
                        opened={deptModalOpened}
                        setOpened={setDeptModalOpened}
                        handleSelect={handleDepartmentSelect}
                        organizationUID={form.values.orgUID}
                    />
                }
                <TextInput
                    label="Department"
                    placeholder="Select Department"
                    mt="md"
                    disabled={form.values.orgUID != "" ? false : true}
                    onClick={() => setDeptModalOpened(true)}
                    {...form.getInputProps('departmentName')}
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
