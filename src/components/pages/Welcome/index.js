import React, { Component } from "react";
import WelcomeImg from "../../../assets/img/Welcome.jpeg";
import { BsArrowUp } from "react-icons/bs";

import {
  Container,
  ImageSlides,
  SelectSlide,
  RegisterButton,
  RegisterScroll,
  Login,
} from "./styles";

export default class Welcome extends Component {
    state={
        visible: false,
    }

    showFooter = () => {
        this.setState({
          visible: true,
        });
      };
    
      onClose = () => {
        this.setState({
          visible: false,
        });
      };
  render() {
    return (
      <Container>
        <h1 class="Welcome">Bem Vindo!</h1>
        <ImageSlides>
          <img src={WelcomeImg} />
        </ImageSlides>
        <SelectSlide>
          <h2>Organize seu dia com o Tudu.</h2>
          <div class="SlideButtons">
            <p />
            <p />
            <p />
            <p />
          </div>
        </SelectSlide>
        <RegisterButton>
          <button class="Register"><a href="/login">Cadastre-se</a></button>
        </RegisterButton>
        <div id="up">
          <RegisterScroll>
            <button>
            <a href="/login">
              <BsArrowUp />
            </a>      
            </button>
            <Login>
                <h1 class="text">Entre</h1>
            </Login>
          </RegisterScroll>
        </div>
      </Container>
    );
  }
}
