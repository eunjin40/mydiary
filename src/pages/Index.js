import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Header>My Diary</Header>

      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>웹서비스 첫화면</h2>
      </Main>

      <Footer>
        <p>Copyright 2023. 다이어리 첫화면</p>
        </Footer>
    </>
  );
};

export default Index;
