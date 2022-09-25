import { Spinner, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Container } from './styles'

interface ISubmitButton {
    label: string
    id?: string
    onClick: () => void
}

export const SubmitButton = ({ label, id, onClick }: ISubmitButton) => {

    const [loading, setLoading] = useState(false)

    return (
        <Container
            id={id ? id : 'submit'}
            loading={loading}
            onClick={() => {
                setLoading(true)
                onClick()
            }}
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