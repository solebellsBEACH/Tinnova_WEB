import React from 'react'
import { Container } from './styled'
import {
    TextField,
} from '@material-ui/core';

interface ITextInput {
    label: string
}

export const TextInput = ({ label }: ITextInput) => {
    return (
        <Container>
            <TextField
                label={label}
                variant="standard"
                fullWidth
            />
        </Container>
    )
}