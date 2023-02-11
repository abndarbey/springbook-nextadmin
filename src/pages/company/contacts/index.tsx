import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import ContactList from 'modules/company/contacts/ContactList'

export default function Contacts() {
    return (
        <Fragment>
            <PageTitle title='Contacts' />
            <ContactList />
        </Fragment>
    )
}
