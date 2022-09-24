import styled from 'styled-components'

interface IContainer {
    readonly loading: boolean
}

export const Container = styled.button<IContainer>`
width:48vw ;
max-width:360px;
height: 55px;
background-color:${props=>props.theme.colors.green2};
margin-top:20px;
border-radius:30px;

display:flex;
justify-content:center;
align-items:center;

opacity:1;
&:hover{
opacity:${(props) => props.loading ? 1 : 0.7}
}
`