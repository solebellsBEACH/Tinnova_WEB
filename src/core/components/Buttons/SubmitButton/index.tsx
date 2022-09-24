import { Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import { Container } from './styles'

interface ISubmitButton {
    label: string
    loading: boolean
}

export const SubmitButton = ({ label, loading }: ISubmitButton) => {
    return (
        <Container
        loading={loading}
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