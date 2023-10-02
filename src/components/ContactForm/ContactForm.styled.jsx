import styled from "@emotion/styled";

export const BodyForm = styled.form` 
display: flex;
flex-direction: column;
width: 400px;
padding: 10px;
font-family: sans-serif;
border: 1px solid ${props => props.theme.colors.grey};
`;

export const LabelForm = styled.label`
font-size: 18px;
width: 200px;
`;

export const InputForm = styled.input` 
display: block;
margin-top: 5px;
margin-bottom: 20px;
`;

export const ButtonForm = styled.button`
background-color: ${props => props.theme.colors.white};
border: 1px solid ${props => props.theme.colors.grey};
border-radius: 3px;
display: inline-block;
height: 20px;
width: 90px;

&:hover{
cursor: pointer;
background-color: ${props => props.theme.colors.accentBlue};
border: 1px solid ${props => props.theme.colors.accentBlue};
} 
`;