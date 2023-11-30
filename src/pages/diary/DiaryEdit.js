import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";

const DiaryEdit = () => {
  const param = useParams();
  console.log(param);
  return (
    <>
      <Header>Diary Edit</Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>다이어리 수정화면</h2>
      </Main>
      <Footer>Copyright 2023. 다이어리 수정화면 {param.pk} 글 수정</Footer>
    </>
  );
};

export default DiaryEdit;
