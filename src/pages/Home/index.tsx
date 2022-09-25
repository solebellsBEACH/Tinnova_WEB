import { Text } from '@chakra-ui/react';
import React from 'react'
import { LottieComponent } from '../../core/components';
import { FormContent } from '../../pageComplement/Home/components';
import { Container, Content, ContentLeft, ContentRight } from '../../pageComplement/Home/styles'

const HomeComponent = () => {

    return (
        <Container>
            <Content>
                <ContentLeft>
                    <LottieComponent
                        size={400}
                    />
                    <Text
                        color='white'
                        fontWeight='bold'
                        fontFamily='roboto'
                        fontSize='5xl'
                        width='400px'
                        marginTop='30px'
                    >Crie um novo usuário no formulário a seguir</Text>
                </ContentLeft>
                <ContentRight>
                    <FormContent />
                </ContentRight>
            </Content>
        </Container>
    )
}

export default HomeComponent;