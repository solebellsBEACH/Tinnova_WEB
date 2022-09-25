import styled from 'styled-components'
 
export const Container  = styled.div`
width:100%;
min-height:70px;
background-color:${props=>props.theme.colors.background4};
margin-bottom:10vh ;
display:flex;
align-items:center;
padding:0 5vw ;

@media (max-width:550px){
    flex-direction:column
}
`