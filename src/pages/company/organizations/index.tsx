import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import OrganizationList from 'modules/company/organizations/OrganizationList'

export default function Organizations() {
    return (
        <Fragment>
            <PageTitle title='Organizations' />
            <OrganizationList />
        </Fragment>
    )
}
