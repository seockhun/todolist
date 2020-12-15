import React from "react";
import * as S from "../style/Main";

function ColorBox() {

    return (
        <S.ColorBoxBlock>
            <S.ColorBlock>
                <S.ColorBox color={"#404246"} ></S.ColorBox>
                <S.ColorBox color={"#ffc2c0"}></S.ColorBox>
                <S.ColorBox color={"#aff79e"}></S.ColorBox>
                <S.ColorBox color={"#aed6ff"}></S.ColorBox>
            </S.ColorBlock>
        </S.ColorBoxBlock>
    );
}

export default ColorBox;