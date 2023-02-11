import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import RoleList from 'modules/company/roles/RoleList'

export default function Roles() {
    return (
        <Fragment>
            <PageTitle title='Roles' />
            <RoleList />
        </Fragment>
    )
}
