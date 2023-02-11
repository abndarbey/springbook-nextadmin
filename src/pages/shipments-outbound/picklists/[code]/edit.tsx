import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import PicklistEdit from 'modules/shipments/outbound/picklists/PicklistEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Picklist Edit'

    return (
        <Fragment>
            <PageTitle title={title} />
            <PicklistEdit title={title} code={code} />
        </Fragment>
    )
}
