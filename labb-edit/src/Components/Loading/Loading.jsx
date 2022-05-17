import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import {useGetPosts} from "../../Api/Api"
import styled from "styled-components"
import loading from "../../Img/loading.gif"
  
const MainContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`
  
const Go = () => {
  useGetPosts()
  const navigate = useNavigate()
  const nav = () =>{
    navigate("/post")
  }
  useEffect(()=>{
    setTimeout(nav, 2000)
  })
  return(
    <MainContainer>
      <img src={loading} alt="carregando" />
    </MainContainer>
  )
  
}
  
export default Go;