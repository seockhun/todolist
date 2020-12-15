import React, { Component, useEffect, useState } from "react";
import * as S from "./style/Main";
import Input from "./components/Input.js";
import ColorBox from "./components/ColorBox.js";


function App() {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log(list);
  }, [list]);
  return (
    <S.SectionBox>
      <S.GlobalStyle></S.GlobalStyle>
      <S.Logo color={"rgb(143 235 236)"}>
        <span>오늘 할 일</span>
      </S.Logo>
      <ColorBox />
      <Input data={data} setData={setData} list={list} setList={setList} />
    </S.SectionBox>

  );
}

export default React.memo(App);