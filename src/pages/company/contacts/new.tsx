import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import ContactNew from 'modules/company/contacts/ContactNew'

export default function New() {
    const title: string = 'New Contact'
    return (
        <Fragment>
            <NextHead title={title} />
            <ContactNew title={title} />
        </Fragment>
    )
}
