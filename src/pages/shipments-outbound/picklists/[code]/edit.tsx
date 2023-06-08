import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextHead from 'components/NextHead'
import PicklistEdit from 'modules/shipments/outbound/picklists/PicklistEdit'

export default function Edit() {
    const router = useRouter()
    const code = router.query.code
    const title: string = 'Picklist Edit'

    return (
        <Fragment>
            <NextHead title={title} />
            <PicklistEdit title={title} code={code} />
        </Fragment>
    )
}
