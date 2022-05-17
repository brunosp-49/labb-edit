import { MainContainer, ContainerPai } from "./CardsStyle";
import {
  useGetPosts,
  usePostPost,
  useGetComments,
  useCreatePostVotes,
} from "../../Api/Api";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function PostCards() {
  
  useEffect(()=>{
    
  },[])

  const [vai, setVai] = useState(false);

  const navigate = useNavigate();

  const data = localStorage.getItem("post");

  const dataFinal = JSON.parse(data);

  const [title, setTitle] = useState("");

  const [post, setPost] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangePost = (e) => {
    setPost(e.target.value);
  };
  const OnPost = () => {
    usePostPost(title, post);
    setTitle("");
    setPost("");
  };
  const number = (a) => {
    if (a === null) {
      return "0";
    } else {
      return a;
    }
  };
  const GoComment = (item) => {
    navigate("/comentario");
  };

  const VoteUp = (item) => {
    useCreatePostVotes();
    useGetComments();
  };

  const VoteDown = () => {};

  const OnEnterLet = (item) => {
    localStorage.setItem("selecionado", JSON.stringify(item));
    localStorage.setItem("id", item.id);
    useGetComments();
  };
  return (
    <ContainerPai>
      <input
        type="text"
        placeholder="Titulo do Post"
        onChange={onChangeTitle}
        value={title}
      />
      <textarea
        placeholder="Escreva seu post..."
        onChange={onChangePost}
        value={post}
      />
      <button className="button1" onClick={OnPost}>
        Postar
      </button>
      <hr />
      {dataFinal.map((item) => {
        return (
          <MainContainer key={item.id} onMouseOver={() => OnEnterLet(item)}>
            <p className="enviado">Enviador por: {item.username}</p>
            <p className="title">{item.title}</p>
            <div className="divBottom">
              <div className="primeiroContainer">
                <svg
                  onClick={() => VoteUp(item)}
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
              <div className="segundoContainer" onClick={() => GoComment(item)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#6F6F6F"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 3v13h-11.643l-4.357 3.105v-3.105h-4v-13h20zm2-2h-24v16.981h4v5.019l7-5.019h13v-16.981z" />
                </svg>
                <p>{number(item.commentCount)}</p>
              </div>
            </div>
          </MainContainer>
        );
      })}
    </ContainerPai>
  );
}

export default PostCards;
