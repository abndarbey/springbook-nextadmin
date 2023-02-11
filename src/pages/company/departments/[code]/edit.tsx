import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import DepartmentEdit from 'modules/company/departments/DepartmentEdit'
import PageLoader from 'components/PageLoader'

export default function Edit() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }

    return (
        <Fragment>
            <PageTitle title='Edit Department' />
            <DepartmentEdit code={query.code} />
        </Fragment>
    )
}
