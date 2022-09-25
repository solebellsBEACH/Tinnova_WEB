import styled from 'styled-components'

interface IContainer {
    readonly loading: boolean
    readonly enable: boolean
}

export const Container = styled.button<IContainer>`
width:48vw ;
max-width:360px;
height: 55px;
background-color:${props=>props.enable?props.theme.colors.green2:props.theme.colors.gray2};
margin-top:20px;
border-radius:30px;

display:flex;
justify-content:center;
align-items:center;

opacity:1;
&:hover{
opacity:${(props) => !props.enable ? 1 : 0.7}
}
`