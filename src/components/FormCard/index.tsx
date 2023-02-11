import { Button, Group } from '@mantine/core'
import ContentCard from 'components/ContentCard'
import { ReactNode } from 'react'

interface IFormCard {
    submitButtonName: string
    handleSubmit: any
    handleCancel: any
    children: ReactNode
}

export default function FormCard(props: IFormCard) {
    return (
        <ContentCard>
            <form onSubmit={props.handleSubmit}>
                {props.children}
                <Group position="apart" mt="xl">
                    <Button color='dark' size="md" onClick={props.handleCancel}>
                        Cancel
                    </Button>
                    <Button type="submit" size="md">
                        {props.submitButtonName}
                    </Button>
                </Group>
            </form>
        </ContentCard>
    )
}