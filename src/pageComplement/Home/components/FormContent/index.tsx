import { Collapse, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { TextInput } from '../../../../core/components'
import { checkDevice } from '../../../../core/utils'
import { Container } from './styles'

export const FormContent = () => {
    const { isOpen, onToggle } = useDisclosure()
    let isDevice = false;

    if (typeof window !== 'undefined') {
        isDevice = checkDevice(window)
    }

    return (
        <Container
            onMouseEnter={() => { if (!isDevice) onToggle() }}
            onMouseLeave={() => { if (!isDevice) onToggle() }}
        >
            <Collapse in={isOpen} animateOpacity>
                <Text
                    color='white'
                    fontWeight='bold'
                    fontFamily='roboto'
                    fontSize='3xl'
                    marginBottom='20px'
                >Preencha o formulário</Text>
            </Collapse>
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