import React from 'react'
import { Container } from './styles'

interface ISubmitButton {
    label: string
}

export const SubmitButton = ({ label }: ISubmitButton) => {
    return (
        <Container>
            {label}
        </Container>
    )
}