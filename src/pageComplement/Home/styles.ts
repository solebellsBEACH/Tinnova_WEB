import styled from 'styled-components'
import { colors } from '../../core/helpers'

export const Container = styled.div`
background-color:${colors().background2};
height:100vh ;
width:auto ;
display:flex;
justify-content:center;
align-items:center;
`
export const Content = styled.div`
margin: 0 30px;
/* background:red; */
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:row;

@media (max-width:950px){
    flex-direction:column;
}
`
export const ContentLeft = styled.div`
width:auto;
height:auto;
margin: 0 30px;
@media (max-width:950px){
    margin: 30px 0;
}
/* background-color:${colors().gray4}; */

`

export const ContentRight = styled.div`
`

export const Label = styled.h1``