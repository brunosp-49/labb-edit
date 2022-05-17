import { MainContainer } from "./HeaderStyle";
import logo from "../../Img/logo.PNG";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Header() {
  const [to, setTo] = useState("");
  const [link, setLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [theOpen, setTheOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const string = localStorage.getItem("page");
    if (string === "cadastro") {
      setTheOpen(false)
      setTo("/");
      setLink("Entrar");
    }else if(string === "comentarios"){
      setTheOpen(true)
      setTo("");
      setLink("Sair");
    }else if(string === "post"){
      setTheOpen(false)
      setTo("");
      setLink("Sair");
    }
    setTimeout(togglePopup, 5);
  }, []);
  const onClick = () => {
    var string = localStorage.getItem("page");
    if (string === "cadastro") {
    } else {
      localStorage.removeItem("token");
      window.location.reload();
    }
  };
  return (
    <>
      {isOpen && (
        <MainContainer>
        {theOpen && (
            <Link to="/post" className="voltar">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#A3A3A3" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg>
            </Link>
            )}
          <div className="left">
            <img src={logo} alt="logo" />
          </div>
          <div className="right">
            <Link to={to} onClick={() => onClick()}>
              {link}
            </Link>
          </div>
        </MainContainer>
      )}
    </>
  );
}

export default Header;
