import { Box, Collapse, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { SubmitButton, TextInput } from '../../../../core/components'
import { IForm } from '../../../../core/interfaces'
import { checkDevice } from '../../../../core/utils'
import { Container } from './styles'

export const FormContent = () => {
    const [fieldFocus, setFieldFocus] = useState<string | null>(null)

    const [formValues, setFormValues] = useState<IForm>({
        name: '',
        cpf: '',
        phone: '',
        email: '',
    })
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
                    margin='0 10px 20px 10px'
                >{fieldFocus == null ? 'Preencha o formulário' : 'Preencha o ' + fieldFocus}</Text>
            </Collapse>
            <SimpleGrid
                width='80%'
                columns={1}
                spacing={5}>
                <TextInput
                    value={formValues.name}
                    setValue={(e) => { setFormValues({ ...formValues, name: e }) }}
                    onMouseEnter={() => { setFieldFocus('nome') }}
                    onMouseLeave={() => { setFieldFocus(null) }}
                    label='Nome Completo'
                />
                <TextInput
                    type='cpf'
                    setValue={(e) => { setFormValues({ ...formValues, cpf: e }) }}
                    value={formValues.cpf}
                    onMouseEnter={() => { setFieldFocus('CPF') }}
                    onMouseLeave={() => { setFieldFocus(null) }}
                    label='CPF' />
                <TextInput
                    type='phone'
                    setValue={(e) => { setFormValues({ ...formValues, phone: e }) }}
                    value={formValues.phone}
                    onMouseEnter={() => { setFieldFocus('telefone') }}
                    onMouseLeave={() => { setFieldFocus(null) }}
                    label='Telefone' />
                <TextInput
                    type='email'
                    setValue={(e) => { setFormValues({ ...formValues, email: e }) }}
                    value={formValues.email}
                    onMouseEnter={() => { setFieldFocus('email') }}
                    onMouseLeave={() => { setFieldFocus(null) }}
                    label='Email' />
            </SimpleGrid>

            <Collapse in={isOpen} animateOpacity>
                <SubmitButton label='Cadastrar' loading={false} />
            </Collapse>
        </Container>
    )
}