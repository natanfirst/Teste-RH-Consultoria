import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #fefefe;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 7em;
  background-color: #ebf0f4;
  border-radius: 10% 10% 0 0;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  position: fixed;

  p {
    width: 30px;
    height: 3px;
    background: #0474bb;
    margin-top: 25px;
  }

  a {
    text-decoration: none;
    color: #abb3b9;
    font-size: 13px;
    margin-top: 2em;
  }
`;

export const RegisterInputs = styled.div`
  margin-top: 1.5em;

  h1 {
    color: #1a55b4;
    margin-bottom: 1.5em;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 270px;
    border: none;
    background: none;
    margin-bottom: 1.5em;
  }
  .Email {
    border-bottom: 1px solid #dbe3ea;
    padding-bottom: 1em;
  }
`;

export const Password = styled.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid #dbe3ea;
`;

export const Submit = styled.div`
  margin-top: 2.5em;
  display: flex;
  flex-direction: column;

  .GoogleLogin {
    width: 290px;
    height: 40px;

    color: #6b7174;
    background: #fff;
    border: none;
    border-radius: 10px;
    margin-bottom: 1em;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
      width: 290px;
      height: 40px;

      margin-bottom: 1em;
      background: #0173bb;
      color: #fff;
      border: none;
      border-radius: 10px;
    }
    svg {
      font-size: 20px;
      margin-right: 10px;
    }
  }

  a {
    color: #fff;
`;
