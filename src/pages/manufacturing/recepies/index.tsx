import { Fragment } from 'react'
import NextHead from 'components/NextHead'
import RecepieList from 'modules/manufacturing/recepies/RecepieList'

export default function Recepies() {
    const title: string = 'Recepies'

    return (
        <Fragment>
            <NextHead title={title} />
            <RecepieList title={title} />
        </Fragment>
    )
}
