import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #fefefe;
  right: 0px;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .Welcome {
    font-size: 30px;
    font-weight: bold;
    color: #1a55b4;
    text-align: center;
    padding-bottom: 1em;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    display: inline-grid;
    .Welcome {
      font-size: 30px;
      padding-top: 4em;
    }
  }
  #up {
    width: 100%;
    height: 12vh;
    display: flex;
    justify-content: center;
  }
`;

export const ImageSlides = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 750px;
  }

  @media (max-width: 768px) {
    img {
      width: 270px;
    }
  }
`;

export const SelectSlide = styled.div`
  text-align: center;
  margin: 3em 0 5em 0;

  h2 {
    font-weight: 100;
    font-size: 16px;
  }

  .SlideButtons {
    display: flex;
    justify-content: center;
    margin-top: 3em;
  }

  p {
    width: 10px;
    height: 10px;
    margin-right: 4px;
    background-color: #868d94;
    border-radius: 5px;
    cursor: pointer;

    :hover {
      width: 10px;
      height: 10px;
      background-color: #221e1f;
    }
  }

  @media (max-width: 768px) {
    font-weight: 100;
    font-size: 17px;
  }
`;

export const RegisterButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .Register {
    width: 100px;
    height: 50px;
    background: #1a55b4;
    cursor: pointer;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RegisterScroll = styled.div`
  display: none;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 366px;
    height: 11vh;
    background-color: #ebf0f4;
    border-radius: 35px 35px 0px 0px;

    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;

    button {
      background: none;
      border: none;
    }

    svg {
      font-size: 20px;
      color: #1a55b4;
    }
  }
`;

export const Login = styled.div`
  display: none;

  @media (max-width: 768px) {
    .text {
      font-size: 30px;
      font-weight: bold;
      color: #1a55b4;
      text-align: center;
    }
  }
`;
