import styled from "@emotion/styled";

export const BodyList = styled.ul` 
font-family: sans-serif;
margin-right: 40px;
list-style-type: none;
`;

export const ListItem = styled.li`
margin-top: 10px;
`;

export const ListButton = styled.button`
width: 60px;
font-family: sans-serif;
margin-left: 10px;
border: 1px solid ${props => props.theme.colors.grey};
border-radius: 3px;

&:hover {
cursor: pointer;
background-color: ${props => props.theme.colors.orange};
border: 1px solid ${props => props.theme.colors.orange};
color: ${props => props.theme.colors.black};
}
`;