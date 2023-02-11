import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import BatchDetails from 'modules/catalogues/batches/BatchDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Batch Details'
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <BatchDetails title={title} code={code} />
        </Fragment>
    )
}
