import { Fragment } from "react"
import { useRouter } from "next/router"
import * as Yup from "yup"
import { useForm, yupResolver } from "@mantine/form"
import { showNotification } from "@mantine/notifications"
import {
    TextInput,
    Paper,
    Container,
    Group,
    Button,
    SimpleGrid,
} from "@mantine/core"
// import { IconUpload } from "@tabler/icons"
import { AuthCardTitle } from "./authElements"
import { useOrganizationRegisterMutation, RegisterOrganization } from "@lib/generated/hooks"

const schema = Yup.object().shape({
    orgName: Yup.string().min(2, "Organization Name should have at least 2 letters"),
    firstName: Yup.string().min(2, "First Name should have at least 2 letters"),
    lastName: Yup.string().min(2, "Last Name should have at least 2 letters"),
    email: Yup.string().email("Invalid email"),
    phone: Yup.string().min(10, "Phone should have at least 10 numbers"),
})

const Register = () => {
    const router = useRouter()
    const [newOrg] = useOrganizationRegisterMutation({})

    const form = useForm({
        validate: yupResolver(schema),
        initialValues: {
            orgName: "",
            website: "",
            sector: "",
            // logo: "",
            // banner: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        },
    })

    const handleSubmit = () => {
        var registerInput: RegisterOrganization = {
            orgName: form.values.orgName,
            website: form.values.website,
            sector: form.values.sector,
            firstName: form.values.firstName,
            lastName: form.values.lastName,
            email: form.values.email,
            phone: form.values.phone
        }

        newOrg({
            variables: {input: registerInput}
        }).then((res: any) => {
            let welcomeMsg: string = `Welcome on board ${res.data.organizationRegister.name}`
            
            showNotification({
                disallowClose: false,
                color: "green",
                message: welcomeMsg,
            })
            router.push("/login")
        }).catch((error: any) => {
            showNotification({
                disallowClose: false,
                color: "red",
                message: error.message,
            })
        })
    }

    return (
        <Fragment>
            <Container size={600} my={40}>
                <AuthCardTitle pageType="register" />
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        <TextInput
                            label="Organization Name"
                            placeholder="Example Company Pvt Ltd"
                            required
                            {...form.getInputProps("orgName")}
                        />
                        <SimpleGrid cols={2}>
                            <TextInput
                                mt="md"
                                label="Website"
                                placeholder="www.example.com"
                                {...form.getInputProps("website")}
                            />
                            <TextInput
                            mt="md"
                            label="Sector"
                            placeholder="Trader"
                            {...form.getInputProps("sector")}
                        />
                        </SimpleGrid>
                        {/* <Group grow mt="md">
                            <FileInput
                                label="Logo"
                                placeholder="Upload Logo"
                                accept="image/png,image/jpeg"
                                icon={<IconUpload size={14}/>}
                                {...form.getInputProps("logo")}
                            />
                            <FileInput
                                label="Banner"
                                placeholder="Upload Banner Image"
                                accept="image/png,image/jpeg"
                                icon={<IconUpload size={14}/>}
                                {...form.getInputProps("logo")}
                            />
                        </Group> */}
                        <Group grow mt="md">
                            <TextInput
                                label="First Name"
                                placeholder="Your Name"
                                required
                                {...form.getInputProps("firstName")}
                            />
                            <TextInput
                                label="Last Name"
                                placeholder="Your Surname"
                                required
                                {...form.getInputProps("lastName")}
                            />
                        </Group>
                        <Group grow mt="md">
                            <TextInput
                                label="Email"
                                placeholder="yourname@example.com"
                                required
                                {...form.getInputProps("email")}
                            />
                            <TextInput
                                label="Phone"
                                placeholder="1234567890"
                                required
                                {...form.getInputProps("phone")}
                            />
                        </Group>
                        <Button type="submit" fullWidth mt="xl">
                            Create Account
                        </Button>
                    </form>
                </Paper>
            </Container>
        </Fragment>
    )
}

export default Register