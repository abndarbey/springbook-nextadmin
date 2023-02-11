import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import CartonDetails from 'modules/inventory/cartons/CartonList'

export default function Details() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Carton Details'
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <CartonDetails title={title} code={code} />
        </Fragment>
    )
}
