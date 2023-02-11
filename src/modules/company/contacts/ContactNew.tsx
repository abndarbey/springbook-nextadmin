import { useState } from 'react'
import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { TextInput } from '@mantine/core'
import { useContactCreateMutation, UpdateContact, Organization } from '@lib/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgSelectModal from 'common/select-table/OrgSelectModal'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Contacts', href: '/company/contacts' },
    { title: 'New', href: '#' },
]

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

interface IContactPageProps {
    title: string
}
export default function ContactNew(props: IContactPageProps) {
    const router = useRouter()
    const [newDept] = useContactCreateMutation({})
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [companyModalOpened, setCompanyModalOpened] = useState(false)

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            name: '',
            companyUID: '',
            orgUID: '',
            sector: '',

            orgName: '',
        },
    })

    const handleOrgSelect = (item: Organization) => {
        if (item) {
            form.values.orgUID = item.uid!
            form.values.orgName = item.name!
        }
    }

    const handleComapnySelect = (item: Organization) => {
        if (item) {
            form.values.orgUID = item.uid!
            form.values.orgName = item.name!
        }
    }

    const handleSubmit = () => {
        var newDeptInput: UpdateContact = {
            companyUID: form.values.companyUID!,
            orgUID: form.values.orgUID,
        }

        newDept({
            variables: {input: newDeptInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Contact ${res.data.contactCreate.name} Created`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push(`/company/contacts/${res.data.contactCreate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push('/company/contacts')
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title} />
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
                <OrgSelectModal
                    opened={companyModalOpened}
                    setOpened={setCompanyModalOpened}
                    handleSelect={handleOrgSelect}
                />
                <TextInput
                    label="Company"
                    placeholder="Company"
                    mt="md"
                    name="company"
                    onClick={() => setCompanyModalOpened(true)}
                    {...form.getInputProps('name')}
                />
                <TextInput
                    label="Sector"
                    placeholder="Sector"
                    mt="md"
                    name="sector"
                    {...form.getInputProps('sector')}
                />
            </FormCard>
        </Page>
    )
}
