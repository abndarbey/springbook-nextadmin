import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { SimpleGrid, TextInput } from '@mantine/core'
import { useUserCreateMutation, UpdateUser, Organization, Department, Role } from '@lib/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import { useState } from 'react'
import DepartmentSelectModal from 'common/select-table/DepartmentSelectModal'
import RoleSelectModal from 'common/select-table/RoleSelectModal'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Users', href: '/company/users' },
    { title: 'New', href: '#' },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

export default function UserNew() {
    const router = useRouter()
    const [newDept] = useUserCreateMutation({})
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [deptModalOpened, setDeptModalOpened] = useState(false)
    const [roleModalOpened, setRoleModalOpened] = useState(false)

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            orgUID: '',
            roleID: '',
            
            departmentID: '',
            orgName: '',
            departmentName: '',
            roleName: '',
        },
    })

    const handleOrgSelect = (item: Organization) => {
        if (item) {
            form.values.orgUID = item.uid!
            form.values.orgName = item.name!
        }
    }

    const handleDepartmentSelect = (item: Department | undefined) => {
        if (item) {
            form.values.departmentID = item?.id!
            form.values.departmentName = item?.name!
        }
    }

    const handleRoleSelect = (item: Role | undefined) => {
        if (item) {
            form.values.roleID = item?.id!
            form.values.roleName = item?.name!
        }
    }

    const handleSubmit = () => {
        var newDeptInput: UpdateUser = {
            firstName: form.values.firstName,
            lastName: form.values.lastName,
            email: form.values.email,
            phone: form.values.phone,
            orgUID: form.values.orgUID,
            roleID: form.values.roleID,
        }

        newDept({
            variables: {input: newDeptInput}
        }).then((res: any) => {
            let welcomeMsg: string = `User ${res.data.userCreate.firstName} Created`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push(`/company/users/${res.data.userCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push('/company/users')
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title='New User' />
            <FormCard
                submitButtonName='Create'
                handleSubmit={form.onSubmit(handleSubmit)}
                handleCancel={handleCancel}
            >
                <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                    <TextInput
                        label="First Name"
                        placeholder="First name"
                        name="firstName"
                        {...form.getInputProps('firstName')}
                    />
                    <TextInput
                        label="Last Name"
                        placeholder="Last name"
                        name="lastName"
                        {...form.getInputProps('lastName')}
                    />
                </SimpleGrid>
                <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                    <TextInput
                        label="Email"
                        placeholder="Email"
                        mt="md"
                        name="email"
                        {...form.getInputProps('email')}
                    />
                    <TextInput
                        label="Phone"
                        placeholder="Phone"
                        mt="md"
                        name="phone"
                        {...form.getInputProps('phone')}
                    />
                </SimpleGrid>
                <OrgSelectModal
                    opened={orgModalOpened}
                    setOpened={setOrgModalOpened}
                    handleSelect={handleOrgSelect}
                />
                <TextInput
                    label="Organization"
                    placeholder="Select Organization"
                    mt="md"
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

                {form.values.departmentID != "" &&
                    <RoleSelectModal
                        opened={roleModalOpened}
                        setOpened={setRoleModalOpened}
                        handleSelect={handleRoleSelect}
                        departmentID={form.values.departmentID}
                    />
                }
                <TextInput
                    label="Role"
                    placeholder="Select Role"
                    mt="md"
                    disabled={form.values.departmentID != "" ? false : true}
                    onClick={() => setRoleModalOpened(true)}
                    {...form.getInputProps('roleName')}
                />
            </FormCard>
        </Page>
    )
}
