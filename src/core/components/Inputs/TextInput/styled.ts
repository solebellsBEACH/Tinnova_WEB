import styled from 'styled-components'
import InputMask from 'react-input-mask';

export const Container  = styled.div`
background:${props=>props.theme.colors.gray4} ;
display:flex;
justify-content:center;
/* align-items:center; */
flex-direction:column;
padding:0px 8px 5px 8px;
border-radius:5px;
width: 100%;
`

export const StyledInput = styled(InputMask)`
width:100%;
height:50px;
border:solid ${props=>props.theme.colors.background4} 2px;
font-size:16px;
&:focus{
    outline:none!important;
}
border-top-width:0px;
border-left-width:0px;
border-right-width:0px;

background-color:${props=>props.theme.colors.gray4}
`
