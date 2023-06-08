import { Fragment, ReactElement } from 'react'
import NextHead from 'components/NextHead'
import ErrorPage, { IErrorPage } from 'modules/errors'

export default function Error404() {
    return (
        <Fragment>
            <NextHead title='404' />
            <ErrorPage {...pageData} />
        </Fragment>
    )
}

Error404.getErrorLayout = function PageLayout(page: ReactElement) {
    return {page}
}

const pageData: IErrorPage = {
    label: 404,
    title: 'You have found a secret place.',
    description: `Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL.`
}
