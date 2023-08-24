import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import RecepieNew from 'modules/manufacturing/recepies/RecepieNew'

export default function New() {
    const title: string = 'New Recepie'

    return (
        <Fragment>
            <NextHead title={title} />
            <RecepieNew title={title} />
        </Fragment>
    )
}
