import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import RoleNew from 'modules/company/roles/RoleNew'

export default function New() {
    return (
        <Fragment>
            <PageTitle title='New Role' />
            <RoleNew />
        </Fragment>
    )
}
