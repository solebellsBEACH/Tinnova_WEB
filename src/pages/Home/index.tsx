import React from 'react'
import { FormContent } from '../../pageComplement/Home/components';
import { Container, Content, ContentLeft, ContentRight } from '../../pageComplement/Home/styles'

const HomeComponent = () => {
    return (
        <Container>
            <Content>
                <ContentLeft></ContentLeft>
                <ContentRight>
                    <FormContent/>
                </ContentRight>
            </Content>
        </Container>
    )
}

export default HomeComponent;