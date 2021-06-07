import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router-dom";
import {
  Container,
  Content,
  RegisterInputs,
  Inputs,
  Password,
  Submit,
} from "./styles";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);

  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleInput = (event = "", input = "") => {
    setForm({
      ...form,
      [input]: event.target.value,
    });
  };

  const sumbitLogin = (e) => {
    if (form.email.length > 0 && form.password.length > 0) {
      history.push("/home");
    } else {
      alert("Insira as informações de Login");
      e.preventDefault();
    }
  };

  return (
    <Container>
      <Content onSubmit={sumbitLogin}>
        <p />
        <RegisterInputs>
          <h1>Entrar</h1>
          <Inputs>
            <input
              type="text"
              placeholder="E-mail"
              size="large"
              value={form.email}
              onChange={(event) => {
                handleInput(event, "email");
              }}
              required
              className="Email"
            />
            <Password>
              <input
                placeholder="Senha"
                size="large"
                type={show ? "text" : "password"}
                value={form.password}
                onChange={(event) => {
                  handleInput(event, "password");
                }}
                required
              />
              {show ? (
                <FaRegEye onClick={handleClick} />
              ) : (
                <FaRegEyeSlash onClick={handleClick} />
              )}
            </Password>
          </Inputs>
        </RegisterInputs>
        <Submit>
          <button type="submit" onClick={sumbitLogin}>
            Entrar
          </button>
          <button className="GoogleLogin">
            <FcGoogle />
            Entrar com o Google
          </button>
        </Submit>
        <a href="/login/register">Não tenho conta</a>
      </Content>
    </Container>
  );
}

export default Login;
