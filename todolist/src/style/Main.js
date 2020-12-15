import styled, { createGlobalStyle } from "styled-components";

export const SectionBox = styled.section`
    width: 600px;
    height: 500px;
    border: 1px solid black;
    box-shadow: 10px 5px 15px #b5b5b5;
`

export const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

export const Logo = styled.div`
    width: 100%;
    height: 30%;
    font-size: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.color};
    color: white;
`;
export const ColorBoxBlock = styled.div`
    width: 100%;
    display:flex;
    height: 60px;
    background: rgb(241 243 245);
    justify-content:center;
    align-items: center;
`
export const ColorBlock = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
`
export const ColorBox = styled.div`
    width: 40px;
    height: 40px;
    background: ${props => props.color};
    cursor: pointer;
`
