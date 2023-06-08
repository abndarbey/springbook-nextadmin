import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import DepartmentEdit from 'modules/company/departments/DepartmentEdit'
import PageLoader from 'components/PageLoader'

export default function Edit() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }

    return (
        <Fragment>
            <NextHead title='Edit Department' />
            <DepartmentEdit code={query.code} />
        </Fragment>
    )
}
