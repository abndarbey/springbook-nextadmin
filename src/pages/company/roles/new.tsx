import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import RoleNew from 'modules/company/roles/RoleNew'

export default function New() {
    return (
        <Fragment>
            <NextHead title='New Role' />
            <RoleNew />
        </Fragment>
    )
}
