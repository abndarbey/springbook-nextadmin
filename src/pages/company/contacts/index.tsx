import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import ContactList from 'modules/company/contacts/ContactList'

export default function Contacts() {
    return (
        <Fragment>
            <NextHead title='Contacts' />
            <ContactList />
        </Fragment>
    )
}
