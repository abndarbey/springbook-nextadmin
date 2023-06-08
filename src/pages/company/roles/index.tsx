import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import RoleList from 'modules/company/roles/RoleList'

export default function Roles() {
    return (
        <Fragment>
            <NextHead title='Roles' />
            <RoleList />
        </Fragment>
    )
}
