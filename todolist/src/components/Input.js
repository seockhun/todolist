import React from "react";
import * as S from "../style/InputStyle";

function Input({ data, setData, list, setList }) {
    function onChangeValue(e) {
        setData(e.target.value);
    }
    const submit = (e) => {
        e.preventDefault();
        setList([...list, data]);
        setData("");
    }
    return (
        <S.InputBlock onSubmit={submit}>
            <S.Input value={data} onChange={onChangeValue} type="text" placeholder="입력..." />
            <S.AddBtn onClick={submit} color="#2ab9b9">추가</S.AddBtn>
        </S.InputBlock>


    );
}

export default Input;
