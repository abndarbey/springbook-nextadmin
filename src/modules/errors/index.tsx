import { Title, Text, Button, Container, Group } from '@mantine/core'
import { useRouter } from 'next/router'
import { errorPageStyles } from './styles'

export interface IErrorPage {
    label: number
    title: string
    description: string
    refresh?: boolean
}

export default function ErrorPage(props: IErrorPage) {
    const { classes } = errorPageStyles()
    const router = useRouter()

    const handleClick = () => {
        props.refresh ? router.reload() : router.push('/')
    }

    return (
        <Container className={classes.root}>
            <div className={classes.label}>
                {props.label}
            </div>
            <Title className={classes.title}>
                {props.title}
            </Title>
            <Text color="dimmed" size="lg" align="center" className={classes.description}>
                {props.description}
            </Text>
            <Group position="center">
                <Button variant="subtle" size="md" onClick={handleClick}>
                    {
                        props.refresh ? 
                        <>Refresh the page</> :
                        <>Take me back to home page</>
                    }
                </Button>
            </Group>
        </Container>
    )
}