import styled from 'styled-components'

export const Container = styled.div`
    background-color:${props => props.theme.colors.background2};
    min-height:100vh ;
    height:auto ;
    width:auto ;
    display:flex;
    align-items:center;
    flex-direction:column;
`


export const Button = styled.button`
    margin-top:10px;
    width:90% ;
    max-width:1000px;
    height: 70px;
    background-color:${props => props.theme.colors.green5};
    border-radius:20px;
    filter:contrast(1.8);
    &:hover{
        filter:contrast(1);
    }
`