import { Box, Collapse, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { SubmitButton, TextInput } from '../../../../core/components'
import { checkDevice, notHaveEmptyFields } from '../../../../core/hooks'
import { IForm } from '../../../../core/interfaces'
import { addUserInLocalStorage } from '../../hooks'
import { Container } from './styles'

interface IFormContent {
    setFormValues: React.Dispatch<React.SetStateAction<IForm>>
    formValues: IForm
}

export const FormContent = ({ formValues, setFormValues }: IFormContent) => {
    const [fieldFocus, setFieldFocus] = useState<string | null>(null)
    const router = useRouter();

    const { isOpen, onToggle } = useDisclosure()
    let isDevice = false;

    if (typeof window !== 'undefined') {
        isDevice = checkDevice(window)
    }
    const handleSubmit = () => {
        addUserInLocalStorage(formValues)
        router.push('/Users')
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
                    margin='0 10px 30px 10px'
                >{fieldFocus == null ? 'Preencha o formulário' : 'Preencha o ' + fieldFocus}</Text>
            </Collapse>
            <SimpleGrid
                width='80%'
                columns={1}
                spacing={8}>
                <TextInput
                    id='name-field'
                    value={formValues.name}
                    setValue={(e) => { setFormValues({ ...formValues, name: e }) }}
                    onMouseEnter={() => { setFieldFocus('nome') }}
                    onMouseLeave={() => { setFieldFocus(null) }}
                    label='Nome Completo'
                />
                <TextInput
                    id='cpf-field'
                    type='cpf'
                    setValue={(e) => { setFormValues({ ...formValues, cpf: e }) }}
                    value={formValues.cpf}
                    onMouseEnter={() => { setFieldFocus('CPF') }}
                    onMouseLeave={() => { setFieldFocus(null) }}
                    label='CPF' />
                <TextInput
                    id='phone-field'
                    type='phone'
                    setValue={(e) => { setFormValues({ ...formValues, phone: e }) }}
                    value={formValues.phone}
                    onMouseEnter={() => { setFieldFocus('telefone') }}
                    onMouseLeave={() => { setFieldFocus(null) }}
                    label='Telefone' />
                <TextInput
                    id='email-field'
                    type='email'
                    setValue={(e) => { setFormValues({ ...formValues, email: e }) }}
                    value={formValues.email}
                    onMouseEnter={() => { setFieldFocus('email') }}
                    onMouseLeave={() => { setFieldFocus(null) }}
                    label='Email' />
            </SimpleGrid>
                <SubmitButton
                enable={notHaveEmptyFields(formValues)}
                    id='submit-button'
                    label='Cadastrar'
                    onClick={handleSubmit} />
        </Container>
    )
}