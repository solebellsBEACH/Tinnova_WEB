import React from 'react'
import { Container, StyledInput } from './styled'
interface ITextInput {
    value: string
    setValue: (value: string) => void
    label: string
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    type?: 'text' | 'cpf' | 'email' | 'phone'
}

export const TextInput = ({ label, onMouseEnter, onMouseLeave, type, value, setValue }: ITextInput) => {

    const inputConfigs = {
        text: { type: 'text', mask: '' },
        cpf: { type: 'text', mask: '999.999.999-99' },
        email: { type: 'text', mask: '' },
        phone: { type: 'text', mask: '(99) 99999-9999' },
    }

    return (
        <Container
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <StyledInput
                placeholder={label}
                type={type === undefined ? 'text' : type}
                mask={type === undefined ? inputConfigs.text.mask : inputConfigs[type].mask}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </Container>
    )
}