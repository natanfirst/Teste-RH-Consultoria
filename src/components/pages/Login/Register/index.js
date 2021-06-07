import React, { useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
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
    nome: "",
    email: "",
  });
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleInput = {}
    
  return (
    <Container>
      <Content>
        <p />
        <RegisterInputs>
          <h1>Cadastre-se</h1>
          <Inputs>
            <input
              type="text"
              placeholder="Nome"
              size="large"
              value={form.nome}
              onChange={(e) => setForm(e.target.value)}
              className="Email"
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              size="large"
              value={form.email}
              required
              onChange={(event) => {
                handleInput(event,'email')}
              } 
              className="Email"
            />
            <Password>
              <input
                placeholder="Senha"
                size="large"
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {show ? (
                <FaRegEye onClick={handleClick} />
              ) : (
                <FaRegEyeSlash onClick={handleClick} />
              )}
            </Password>
            <Password>
              <input
                placeholder="Repetir Senha"
                size="large"
                type={show ? "text" : "password"}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
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
          <button>Cadastrar</button>
          <button>
            <FcGoogle />
            Cadastrar com o Google
          </button>
        </Submit>
        <a href="/login">Já tenho conta</a>
      </Content>
    </Container>
  );
}

export default Login;
