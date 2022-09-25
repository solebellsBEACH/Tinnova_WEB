import { Text } from '@chakra-ui/react'
import React from 'react'
import { LottieComponent } from '../LottieComponent'
import { Container } from './styles'

interface IHeaderProps {
    label: string
}

export const Header = ({ label }: IHeaderProps) => {
    return (
        <Container>
            <LottieComponent size={100} />
            <Text
                color='white'
                fontWeight='bold'
                fontFamily='roboto'
                fontSize='2xl'
            >{label}</Text>
        </Container>
    )
}