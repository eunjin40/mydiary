import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const Index = () => {
  return (
    <>
      <Header>My Diary 홈</Header>

      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>다이어리 첫화면</h2>
      </Main>

      <Footer>Copyright 2023. 다이어리 화면</Footer>
    </>
  );
};

export default Index;
