import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import {
    TextInput,
    PasswordInput,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    FileInput,
    Box
} from '@mantine/core'
import { IconUpload } from '@tabler/icons'
import Page from 'components/Page'
import { INavTrailProps } from 'components/NavTrails'

const navTrails: INavTrailProps[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'Organizations', href: '/company/organizations' },
    { title: 'New', href: '#' },
]

const schema = Yup.object().shape({
    orgName: Yup.string().min(2, 'Organization Name should have at least 2 letters'),
    firstName: Yup.string().min(2, 'First Name should have at least 2 letters'),
    lastName: Yup.string().min(2, 'Last Name should have at least 2 letters'),
    email: Yup.string().email('Invalid email'),
    phone: Yup.string().min(10, 'Phone should have at least 10 numbers'),
    password: Yup.string().min(6, 'Password should have at least 6 letters'),
})

const OrgNew = () => {
    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            orgName: '',
            website: '',
            logo: '',
            banner: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
        },
    })

    return (
        <Page navTrails={navTrails}>
            <Box>
                <Title
                    align="left"
                    sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                >
                    Create Organization
                </Title>
            </Box>
            <Group position='center'>
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        <TextInput
                            label="Organization Name"
                            placeholder="Example Company Pvt Ltd"
                            required
                            {...form.getInputProps('orgName')}
                        />
                        <TextInput
                            mt="md"
                            label="Website"
                            placeholder="www.example.com"
                            {...form.getInputProps('website')}
                        />
                        <Group grow mt="md">
                            <FileInput
                                label="Logo"
                                placeholder="Upload Logo"
                                accept="image/png,image/jpeg"
                                icon={<IconUpload size={14}/>}
                                {...form.getInputProps('logo')}
                            />
                            <FileInput
                                label="Banner"
                                placeholder="Upload Banner Image"
                                accept="image/png,image/jpeg"
                                icon={<IconUpload size={14}/>}
                                {...form.getInputProps('logo')}
                            />
                        </Group>
                        <Group grow mt="md">
                            <TextInput
                                label="First Name"
                                placeholder="Your Name"
                                required
                                {...form.getInputProps('firstName')}
                            />
                            <TextInput
                                label="Last Name"
                                placeholder="Your Surname"
                                required
                                {...form.getInputProps('lastName')}
                            />
                        </Group>
                        <Group grow mt="md">
                            <TextInput
                                label="Email"
                                placeholder="yourname@example.com"
                                required
                                {...form.getInputProps('email')}
                            />
                            <TextInput
                                label="Phone"
                                placeholder="1234567890"
                                required
                                {...form.getInputProps('phone')}
                            />
                        </Group>
                        <PasswordInput
                            mt="md"
                            label="Password"
                            placeholder="Your password"
                            required
                            {...form.getInputProps('password')}
                        />
                        <Group position="right" mt="xl">
                            <Button type="submit" size="md">
                                Create
                            </Button>
                        </Group>
                    </form>
                </Paper>
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        <TextInput
                            label="Organization Name"
                            placeholder="Example Company Pvt Ltd"
                            required
                            {...form.getInputProps('orgName')}
                        />
                        <TextInput
                            mt="md"
                            label="Website"
                            placeholder="www.example.com"
                            {...form.getInputProps('website')}
                        />
                        <Group grow mt="md">
                            <FileInput
                                label="Logo"
                                placeholder="Upload Logo"
                                accept="image/png,image/jpeg"
                                icon={<IconUpload size={14}/>}
                                {...form.getInputProps('logo')}
                            />
                            <FileInput
                                label="Banner"
                                placeholder="Upload Banner Image"
                                accept="image/png,image/jpeg"
                                icon={<IconUpload size={14}/>}
                                {...form.getInputProps('logo')}
                            />
                        </Group>
                        <Group grow mt="md">
                            <TextInput
                                label="First Name"
                                placeholder="Your Name"
                                required
                                {...form.getInputProps('firstName')}
                            />
                            <TextInput
                                label="Last Name"
                                placeholder="Your Surname"
                                required
                                {...form.getInputProps('lastName')}
                            />
                        </Group>
                        <Group grow mt="md">
                            <TextInput
                                label="Email"
                                placeholder="yourname@example.com"
                                required
                                {...form.getInputProps('email')}
                            />
                            <TextInput
                                label="Phone"
                                placeholder="1234567890"
                                required
                                {...form.getInputProps('phone')}
                            />
                        </Group>
                        <PasswordInput
                            mt="md"
                            label="Password"
                            placeholder="Your password"
                            required
                            {...form.getInputProps('password')}
                        />
                        <Group position="right" mt="xl">
                            <Button type="submit" size="md">
                                Create
                            </Button>
                        </Group>
                    </form>
                </Paper>
            </Group>
        </Page>
    )
}

export default OrgNew