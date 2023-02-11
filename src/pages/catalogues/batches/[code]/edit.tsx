import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import BatchEdit from 'modules/catalogues/batches/BatchEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Batch Edit'

    return (
        <Fragment>
            <PageTitle title={title} />
            <BatchEdit title={title} code={code} />
        </Fragment>
    )
}
