import { Text } from '@chakra-ui/react'
import React from 'react'
import { LottieComponent } from '../LottieComponent'
import { Container } from './styles'

export const Header = () => {
    return (
        <Container>
            <LottieComponent size={100} />
            <Text
                color='white'
                fontWeight='bold'
                fontFamily='roboto'
                fontSize='2xl'
            >Listagem de Usuários</Text>
        </Container>
    )
}