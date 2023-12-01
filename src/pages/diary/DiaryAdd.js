import React from 'react'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'

const DiaryAdd = () => {
  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate(-1);
  };
  return (
    <>
    <Header handleClickMenu={handleClickMenu} icon="bt_back.svg">Diary Add</Header>
    <Main>
    <h2 style={{ textAlign: "center", color: "red" }}>다이어리 추가화면</h2>
    </Main>
    <Footer>Copyright 2023. 다이어리 추가화면</Footer>
    </>
  )
}

export default DiaryAdd