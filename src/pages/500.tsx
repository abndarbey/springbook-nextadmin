import { Fragment, ReactElement } from 'react'
import PageTitle from 'components/PageTitle'
import ErrorPage, { IErrorPage } from 'modules/errors'

export default function Error500() {
    return (
        <Fragment>
            <PageTitle title='500' />
            <ErrorPage {...pageData} />
        </Fragment>
    )
}

Error500.getErrorLayout = function PageLayout(page: ReactElement) {
    return {page}
}

const pageData: IErrorPage = {
    refresh: true,
    label: 500,
    title: 'Something bad just happened...',
    description: `Our servers could not handle your request. Don't worry, our development team was already notified. Try refreshing the page.`,
}
