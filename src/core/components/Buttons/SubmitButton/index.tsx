import { Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import { Container } from './styles'

interface ISubmitButton {
    label: string
    loading: boolean
    id?: string
    onClick: () => void
}

export const SubmitButton = ({ label, loading, id, onClick }: ISubmitButton) => {
    return (
        <Container
            id={id}
            loading={loading}
            onClick={onClick}
        >
            {loading ? <Spinner size='lg' color='white' /> : <Text
                color='white'
                fontWeight='bold'
                fontFamily='roboto'
                fontSize='18px'
            >
                {label}
            </Text>}
        </Container>
    )
}