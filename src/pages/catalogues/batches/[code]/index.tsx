import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import BatchDetails from 'modules/catalogues/batches/BatchDetails'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Batch Details'
    
    return (
        <Fragment>
            <NextHead title={title} />
            <BatchDetails title={title} code={code} />
        </Fragment>
    )
}
