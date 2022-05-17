import { MainContainer, SubContainer } from "./CadastroStyle";
import Header from "../../Components/Header/Header";
import { useSignup } from "../../Api/Api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Cadastro() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const onChange = (e) => {
    var elemento = document.getElementById(e.target.id);
    if (elemento.id === "name") {
      setUserName(e.target.value);
    } else if (elemento.id === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  useEffect(() => {
    let teste = localStorage.getItem("token");
    if (teste === null) {
    } else {
      navigate("/post");
    }
    localStorage.setItem("page", "cadastro");
    setTimeout(togglePopup, 5);
  }, []);
  const Submit = (e) => {
    e.preventDefault();
    useSignup(userName, email, password);
    navigate("/post");
  };
  return (
    <>
      {isOpen && (
        <MainContainer>
          <SubContainer onSubmit={Submit}>
            <Header />
            <div className="top">
              <p className="p1">Olá, boas vindas ao LabEddit</p>
            </div>
            <div className="mid">
              <input
                type="text"
                id="name"
                placeholder="Nome de usuário"
                onChange={onChange}
                required
              />
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                onChange={onChange}
                required
              />
              <input
                type="password"
                id="password"
                placeholder="Senha"
                onChange={onChange}
                pattern="^.{8,32}$"
                title="A senha deve conter de 8-32 caracteres"
                required
              />
            </div>
            <div className="bottom">
              <p>
                Ao continuar, você concorda com o nosso{" "}
                <a>Contrato de usuário</a> e nossa{" "}
                <a>Política de Privacidade</a>
              </p>
              <label htmlFor="check" title="oi">
                <input
                  type="checkbox"
                  name="check"
                  title="Concorde com os termos de uso"
                  required
                />
                Eu concordo em receber emails sobre coisas legais no Labeddit
              </label>
              <button className="button1">Continuar</button>
            </div>
          </SubContainer>
        </MainContainer>
      )}
    </>
  );
}

export default Cadastro;
