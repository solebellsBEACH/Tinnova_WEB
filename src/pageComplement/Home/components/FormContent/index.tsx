import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { TextInput } from '../../../../core/components'
import { Container } from './styles'

export const FormContent = () => {
    return (
        <Container>
            <SimpleGrid 
            width='80%'
            columns={1} 
            spacing={5}>
                <TextInput label='Nome Completo' />
                <TextInput label='CPF' />
                <TextInput label='Telefone' />
                <TextInput label='Email' />
            </SimpleGrid>
        </Container>
    )
}