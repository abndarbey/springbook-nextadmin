import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import ContactNew from 'modules/company/contacts/ContactNew'

export default function New() {
    const title: string = 'New Contact'
    return (
        <Fragment>
            <PageTitle title={title} />
            <ContactNew title={title} />
        </Fragment>
    )
}
