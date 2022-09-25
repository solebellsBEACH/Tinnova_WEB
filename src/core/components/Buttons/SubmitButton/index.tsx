import { Spinner, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Container } from './styles'

interface ISubmitButton {
    label: string
    id?: string
    onClick: () => void
    enable: boolean
}

export const SubmitButton = ({ label, id, onClick, enable }: ISubmitButton) => {

    const [loading, setLoading] = useState(false)

    return (
        <Container
        enable={enable}
            id={id ? id : 'submit'}
            loading={loading}
            onClick={() => {
                setLoading(true)
                onClick()
            }}
        >
            {loading ? <Spinner size='lg' color='white' /> : <Text
                color={enable?'white':'gray.300'}
                fontWeight='bold'
                fontFamily='roboto'
                fontSize='18px'
            >
                {label}
            </Text>}
        </Container>
    )
}