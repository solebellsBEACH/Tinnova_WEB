import React from 'react'
import { TextInput } from '../../../../core/components'
import { Container} from './styles'

export const FormContent = () => {

    return (
        <Container>
            <TextInput label='Nome Completo'/>
        </Container>
    )
}