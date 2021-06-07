import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .Title {
    height: 55px;
    text-align: center;
    padding-top: 12px;
  }

  h1 {
    font-size: 18px;
    font-weight: 100;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 88vh;
  background-color: #ebf0f4;
  border-radius: 10% 10% 0 0;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  .TopDivision {
    width: 30px;
    height: 3px;
    background: #0474bb;
    margin-top: 25px;
  }

  .LineDivision {
    width: 75%;
    height: 2px;
    background-color: #d9e1e8;
    margin-top: 2px;
  }
`;

export const InsertInformations = styled.div`
  width: 75%;
  padding-top: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #insvg {
    width: 100%;
    display: flex;
    padding-bottom: 24px;

    svg {
      font-size: 20px;
      color: #798187;
      margin-right: 8px;
    }
  }

  input {
    border: none;
    background: none;
  }
`;

export const InsertTitle = styled.input`
  width: 100%;
  height: 35px;
  border: none;
  background: none;

  ::placeholder {
    color: #0173bb;
    font-size: 18px;
  }
`;

export const AddDescription = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  background: none;

  padding-bottom: 20px;
`;

export const InsertData = styled.input`
  ::placeholder {
    font-size: 15px;
  }
`;
export const InsertCategory = styled.input`
  ::placeholder {
    font-size: 15px;
  }
`;
export const AddMember = styled.input`
  ::placeholder {
    font-size: 15px;
  }
`;
export const InsertClips = styled.input`
  ::placeholder {
    font-size: 15px;
  }
`;

export const SubTasks = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const SubTask = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export const SquareConfirmation = styled.p`
  width: 15px;
  height: 15px;
  border: 1px solid #798187;
  border-radius: 5px;
  margin-right: 8px;
`;

export const SubTasktitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #798187;
`;

export const AddSubTask = styled.div`
  display: flex;

  svg {
    font-size: 15px;
    color: #798187;
    margin-right: 8px;
  }
`;

export const AddSubTaskTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #798187;
`;


export const Menu = styled.div`
  width: 100%;
  height: 70px;
  background: #fff;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;

  svg {
    color: #358dc6;
    font-size: 25px;
  }

  a {
    :last-child {
      svg {
        font-size: 70px;
        margin-bottom: 0.3em;
      }
    }
  }
`;