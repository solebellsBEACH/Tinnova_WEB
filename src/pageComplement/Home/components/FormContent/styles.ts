import styled from 'styled-components'

export const Container = styled.div`
background:${props=>props.theme.colors.background4} ;
min-width:250px ;
max-width:450px ;
width:60vw ;
min-height:300px;
border-radius:10px;
padding:40px 0px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`