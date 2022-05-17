import { MainContainer, SubContainer } from "./LoginStyle";
import logo from "../../Img/logo.PNG";
import { useNavigate } from "react-router-dom";
import { useLogin} from "../../Api/Api";
import { useState } from "react";
import { useEffect } from "react";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const OnLogin = () => {
    useLogin(email, password);
  };

  useEffect(() => {
    let teste = localStorage.getItem("token");
    if (teste === null) {
    } else {
      navigate("/go");
    }
  }, []);

  const onCriarConta = () => {
    navigate("/cadastro");
    setTimeout(window.location.reload(), 5);
  };

  const onChange = (e) => {
    var elemento = document.getElementById(e.target.id);
    if (elemento.id === "password") {
      setPassword(e.target.value);
    } else if (elemento.id === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  return (
    <MainContainer>
      <SubContainer>
        <div className="top">
          <img src={logo} alt="Logo" />
          <p className="p1">LabEddit</p>
          <p className="p2">O projeto de rede social da Labenu</p>
        </div>
        <div className="mid">
          <input
            type="email"
            placeholder="E-mail"
            id="email"
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="Senha"
            id="password"
            onChange={onChange}
          />
        </div>
        <div className="bottom">
          <div className="button1" onClick={() => OnLogin()}>
            Continuar
          </div>
          <hr />
          <div onClick={() => onCriarConta()} className="button2">
            Crie uma conta!
          </div>
        </div>
      </SubContainer>
    </MainContainer>
  );
}

export default Login;
