import styled from "styled-components";

export const InputBlock = styled.form`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 10px;
`
export const Input = styled.input`
    width:70%;
    border: none;
    outline: none;
    border-bottom: 1px solid #a1f1ee;
    padding: 20px 10px 20px 10px;
`
export const AddBtn = styled.button`
    width: 60px;
    height: 38px;
    background: ${props => props.color};
    border: none;
    outline: none;
    color: white;
    border-radius: 3px;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover{
        background: #70c3c3;
    }
    &:active{
        background: #2ab9b9;
    }
`;

export const Wrapper = styled.ul`
    padding: 0;
    overflow: scroll;
    width: 100%;
    height: 209px;

`

export const Array = styled.li`
    width: 100%;
    height: 50px;
    list-style: none;
    border-bottom: 1px solid #efefef;  
`