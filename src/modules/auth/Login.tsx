import { Fragment, useState } from 'react'
import { useRouter } from 'next/router' 
import { showNotification } from '@mantine/notifications'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Container,
    Group,
    Button,
    Center,
    Text,
} from '@mantine/core'
import { AuthCardTitle } from './authElements'

import { useGenerateOtpMutation, useLoginMutation, OtpRequest, LoginRequest } from 'gql/generated/hooks'

export default function Login() {
    const router = useRouter()

    const [otp, setOTP] = useState('')
    const [isOtpGenerated, setIsOtpGenerated] = useState(false)
    const [otpRequest] = useGenerateOtpMutation({})
    const [loginRequest] = useLoginMutation({})

    const schema = Yup.object().shape({
        // handle: Yup.string().handle('Invalid handle'),
        // otp: Yup.string().min(5, 'Password should have at least 5 letters'),
    })

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            handle: '',
            otp: '',
        },
    })

    const handleSubmit = () => {
        if (!isOtpGenerated) {
            var handleInput: OtpRequest = {
                handle: form.values.handle
            }
    
            otpRequest({
                variables: {input: handleInput}
            }).then((res: any) => {
                form.values.otp = ''
                setOTP(res.data.generateOTP)
                setIsOtpGenerated(true)
                showNotification({
                    disallowClose: false,
                    color: 'green',
                    message: 'OTP Sent',
                })
            }).catch((error: any) => {
                showNotification({
                    disallowClose: false,
                    color: 'red',
                    message: error.message,
                })
            })
        } else {
            var loginInput: LoginRequest = {
                handle: form.values.handle,
                otp: form.values.otp
            }
    
            loginRequest({
                variables: {input: loginInput}
            }).then((res: any) => {
                localStorage.setItem('token', res.data.login.sessionToken)
                showNotification({
                    disallowClose: false,
                    color: 'green',
                    message: 'Welcome',
                })
                router.push('/dashboard')
            }).catch((error: any) => {
                showNotification({
                    disallowClose: false,
                    color: 'red',
                    message: error.message,
                })
            })
        }
    }

    const handlePrevStep = () => {
        setIsOtpGenerated(false)
    }

    const handleResendOTP = () => {
        var handleInput: OtpRequest = {
            handle: form.values.handle
        }

        otpRequest({
            variables: {input: handleInput}
        }).then((res: any) => {
            form.values.otp = ''
            setOTP(res.data.generateOTP)
            setIsOtpGenerated(true)
            // handleResponse(res)
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: 'red',
                message: error.message,
            })
        })
    }

    return (
        <Fragment>
            <Container size={420} my={40}>
                <AuthCardTitle pageType='login' />        
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        {!isOtpGenerated ?
                            <Fragment>
                                <TextInput
                                    label="Email"
                                    placeholder="yourname@example.com"
                                    required
                                    {...form.getInputProps('handle')}
                                />
                                <Group position="apart" mt="lg">
                                    <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
                                        <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
                                            Forgot handle?
                                        </Anchor>
                                </Group>
                                {
                                    !form.values.handle ?
                                    <Button disabled fullWidth mt="xl">
                                        Request OTP
                                    </Button> :
                                    <Button type="submit" fullWidth mt="xl">
                                        Request OTP
                                    </Button>
                                }
                            </Fragment> :
                            <Fragment>
                                <TextInput
                                    label="Email"
                                    placeholder="yourname@example.com"
                                    disabled
                                    {...form.getInputProps('handle')}
                                />
                                <PasswordInput
                                    mt="md"
                                    label="OTP"
                                    placeholder="Your otp"
                                    required
                                    {...form.getInputProps('otp')}
                                />
                                <Group position="apart" mt="lg">
                                    <Anchor<'a'> onClick={handlePrevStep}size="sm">
                                        Edit Email
                                    </Anchor>
                                    <Anchor<'a'> onClick={handleResendOTP} size="sm">
                                        Resend OTP
                                    </Anchor>
                                </Group>
                                {
                                    form.values.otp.length < 5 ?
                                    <Button disabled fullWidth mt="xl">
                                        Login
                                    </Button> :
                                    <Button type="submit" fullWidth mt="xl">
                                        Login
                                    </Button>
                                }
                            </Fragment>
                        }
                    </form>
                </Paper>
                <Center mt="md">
                    {isOtpGenerated ? <Text>{otp}</Text> : <></>}
                </Center>
            </Container>
        </Fragment>
    )
}
