import { MainContainer, ContainerPai, Odin } from "./ComentarioStyle";
import { useGetComments, useCreateComment } from "../../Api/Api";
import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../Components/Header/Header";
import { useEffect } from "react";

function Comentario() {
  const [isOpen, setIsOpen] = useState(false);
  const [dataFinal, setDatafinal] = useState([])

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    let teste = localStorage.getItem("token");
    if (teste === null) {
      navigate("/");
    } else {
    }
    setTimeout(setDatafinal(JSON.parse(localStorage.getItem("comentarios"))), 1);
    setTimeout(togglePopup, 5);
  }, [])

  useGetComments();

  localStorage.setItem("page", "comentarios");

  const escolhidop = localStorage.getItem("selecionado");
  const escolhido = JSON.parse(escolhidop);

  const id = localStorage.getItem("id");

  const navigate = useNavigate();

  const [post, setPost] = useState("");

  const OnChangePost = (e) => {
    setPost(e.target.value);
    useGetComments();
  };
  const OnPost = () => {
    useCreateComment(post, id);
    setPost("");
    window.location.reload()
  };
  const number = (a) => {
    if (a === null) {
      return "0";
    } else {
      return a;
    }
  };
  const espaco = (numberCom) => {
    if (numberCom === null){
      return (<hr/>)
    }else{
    }
  };

  return (
    <>
      {isOpen && (
        <Odin>
          <Header />
          {(() => {
            if (dataFinal.length > 0) {
              return (
                <div className="paiTop">
                  <MainContainer>
                    <p className="enviado">
                      Enviador por: {escolhido.username}
                    </p>
                    <p className="title">{escolhido.body}</p>
                    <div className="divBottom">
                      <div className="primeiroContainer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#6F6F6F"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
                        </svg>
                        <p>{number(escolhido.voteSum)}</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#6F6F6F"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                        </svg>
                      </div>
                    </div>
                  </MainContainer>
                </div>
              );
            } else {
              return <></>;
            }
          })()}
          {espaco(escolhido.commentCount)}
          <ContainerPai>
            <textarea
              placeholder="Escreva seu comentário..."
              onChange={OnChangePost}
              value={post}
            />
            <button className="button1" onClick={OnPost}>
              Postar
            </button>
            <hr />
            {dataFinal.map((item) => {
              return (
                <MainContainer key={item.id}>
                  <p className="enviado">Enviador por: {item.username}</p>
                  <p className="title">{item.body}</p>
                  <div className="divBottom">
                    <div className="primeiroContainer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#6F6F6F"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
                      </svg>
                      <p>{number(item.voteSum)}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#6F6F6F"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                      </svg>
                    </div>
                  </div>
                </MainContainer>
              );
            })}
          </ContainerPai>
        </Odin>
      )}
    </>
  );
}

export default Comentario;
