import styled from 'styled-components'

export const Container = styled.div`
background-color:${props=>props.theme.colors.background2};
min-height:100vh ;
height:auto ;
width:auto ;
display:flex;
justify-content:center;
align-items:center;
`
export const Content = styled.div`
/* background:red; */
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
width:90% ;
@media (max-width:950px){
    flex-direction:column;
}
`
export const ContentLeft = styled.div`
width:auto;
height:auto;
margin: 0 30px;
display:flex;
justify-content:center;
align-items:center;
@media (max-width:950px){
    margin: 30px 0;
    width:60% ;
}

`

export const ContentRight = styled.div`
`