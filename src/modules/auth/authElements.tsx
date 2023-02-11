import { Fragment, useState } from "react"
import { Anchor, Text, Title } from "@mantine/core"

interface IAuthCardTitleProps {
    pageType: string
}
export function AuthCardTitle(props: IAuthCardTitleProps) {
    return (
        <Fragment>
            {props.pageType === 'login' &&
            <Fragment>
                <Title
                    align="center"
                    sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                >
                    Welcome back!
                </Title>
                <Text color="dimmed" size="sm" align="center" mt={5}>
                    Do not have an account yet?{' '}
                    <Anchor<'a'> href="/register" size="sm">
                        Create account
                    </Anchor>
                </Text>
            </Fragment>}

            {props.pageType === 'register' &&
            <Fragment>
                <Title
                    align="center"
                    sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                >
                    Create Account
                </Title>
                <Text color="dimmed" size="sm" align="center" mt={5}>
                    Already have an account?{' '}
                    <Anchor<'a'> href="/login" size="sm">
                        Login
                    </Anchor>
                </Text>
            </Fragment>}
        </Fragment>
    )
}