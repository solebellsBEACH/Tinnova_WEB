import styled from 'styled-components'
import { colors } from '../../core/helpers'

export const Container = styled.div`
background-color:${colors().background2};
min-height:100vh ;
min-width:100vw ;
display:flex;
justify-content:center;
align-items:center;
`
export const Content = styled.div`
margin: 0 30px;
background:red;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:row;
`
export const ContentLeft = styled.div`
width:100px;
height:100px;
background:blue ;
margin-right:30px;
/* background-color:${colors().gray4}; */

`

export const ContentRight = styled.div`
background:yellow ;
`