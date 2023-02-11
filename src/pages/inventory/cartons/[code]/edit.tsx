import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import CartonEdit from 'modules/inventory/cartons/CartonEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Carton Edit'

    return (
        <Fragment>
            <PageTitle title={title} />
            <CartonEdit title={title} code={code} />
        </Fragment>
    )
}
