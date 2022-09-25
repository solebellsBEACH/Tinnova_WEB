import styled from "styled-components";

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
`;