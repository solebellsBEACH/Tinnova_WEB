import { Text } from '@chakra-ui/react';
import React from 'react'
import { FormContent } from '../../pageComplement/Home/components';
import { Container, Content, ContentLeft, ContentRight, Label } from '../../pageComplement/Home/styles'

const HomeComponent = () => {
    return (
        <Container>
            <Content>
                <ContentLeft>
                    <Text
                        color='white'
                        fontWeight='bold'
                        fontFamily='roboto'
                        fontSize='6xl'
                        width='25rem'
                    >Crie um novo usuário no formulário ao lado</Text>
                </ContentLeft>
                <ContentRight>
                    <FormContent />
                </ContentRight>
            </Content>
        </Container>
    )
}

export default HomeComponent;