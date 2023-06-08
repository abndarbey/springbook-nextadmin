import { useRouter } from 'next/router'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { TextInput } from '@mantine/core'
import { useContactUpdateMutation, UpdateContact, Organization, useContactQuery } from 'gql/generated/hooks'
import { showNotification } from '@mantine/notifications'

import PageHeader from 'components/PageHeader'
import FormCard from 'components/FormCard'
import OrgSelectModal from 'common/select-table/OrgSelectModal'
import { useState } from 'react'
import PageLoader from 'components/PageLoader'

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    orgUID: Yup.string().min(2, 'Invalid org UID'),
})

interface IContactEditProps {
    title: string
    code?: any
}

export default function ContactEdit(props: IContactEditProps) {
    const router = useRouter()
    const [updateDept] = useContactUpdateMutation({})
    const [formData, setFormData] = useState(false)
    const [orgModalOpened, setOrgModalOpened] = useState(false)
    const [companyModalOpened, setCompanyModalOpened] = useState(false)

    const navTrails: INavTrailProps[] = [
        { title: 'Dashboard', href: '/' },
        { title: 'Contacts', href: '/company/contacts' },
        { title: props.code, href: `/company/contacts/${props.code}` },
        { title: 'Edit', href: '#' },
    ]

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

    // fetch data
    const { data, loading, error } = useContactQuery(
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
                name: data.contact?.name!,
                companyUID: data.contact.companyUID,
                sector: data.contact.sector!,
                orgUID: data.contact.organization?.uid,
                orgName: data.contact.organization?.name!
            }
        )
        setFormData(true)
    }

    const handleOrgSelect = (item: Organization) => {
        if (item) {
            form.values.orgUID = item.uid!
            form.values.orgName = item.name!
        }
    }

    const handleCompanySelect = (item: Organization) => {
        if (item) {
            form.values.companyUID = item.uid!
            form.values.name = item.name!
        }
    }

    const handleSubmit = () => {
        var updateDeptInput: UpdateContact = {
            companyUID: form.values.companyUID,
            orgUID: form.values.orgUID,
        }

        updateDept({
            variables: {id: data?.contact.id!, input: updateDeptInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Contact ${res.data.contactUpdate.name} Updated`
            
            showNotification({
                disallowClose: false,
                color: 'green',
                message: welcomeMsg,
            })
            router.push(`/company/contacts/${res.data.contactUpdate.code}`)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    const handleCancel = () => {
        router.push(`/company/contacts/${props.code}`)
    }

    return (
        <Page navTrails={navTrails}>
            <PageHeader title={props.title} />
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
