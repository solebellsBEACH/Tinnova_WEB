import { Text } from '@chakra-ui/react'
import React from 'react'
import { Container, StyledInput } from './styled'
interface ITextInput {
    value: string
    setValue: (value: string) => void
    label: string
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    type?: 'text' | 'tel'
}

export const TextInput = ({ label, onMouseEnter, onMouseLeave, type, value, setValue }: ITextInput) => {

    return (
        <Container
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <StyledInput
                placeholder={label}
                onChange={e => setValue(e.target.value)}
                type={type == undefined ? 'text' : type}
            />
        </Container>
    )
}