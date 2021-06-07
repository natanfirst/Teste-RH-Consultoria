import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #f4dddc;

  .Title {
    display: flex;
    height: 50px;
    text-align: center;
    justify-content: space-between;
    padding: 12px 40px 0 40px;

    svg {
      font-size: x-large;
    }
  }

  h1 {
    font-size: 18px;
    font-weight: 100;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 88vh;
  background-color: #f4dddc;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  .LineDivision {
    width: 75%;
    height: 1px;
    background-color: gray;
    margin-top: 2px;
  }

  .LineDivision2 {
    width: 75%;
    height: 1px;
    background-color: gray;
    margin-bottom: 18px;
  }
`;

export const InsertInformations = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  #insvg {
    width: 100%;
    display: flex;
    align-items: center;
    padding-bottom: 24px;

    svg {
      font-size: 20px;
      color: #798187;
      margin-right: 8px;
    }
    .AddSvg {
      font-size: 40px;
      color: #358dc6;
    }
  }

  input {
    border: none;
    background: none;
  }
`;

export const InsertTitle = styled.h2`
  font-size: 19px;
  font-weight: bold;
  color: #f19d97;
  padding-bottom: 14px;
`;

export const AddDescription = styled.p`
  color: #808081;
  font-size: 10px;
  padding-bottom: 14px;
`;

export const InsertData = styled.h4`
  font-size: 14px;
  font-weight: 100;
  color: #7f868c;
`;
export const InsertCategory = styled.div`
  width: 68px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  background-color: #f18d85;
  height: 20px;
  border-radius: 5px;
`;
export const AddMember = styled.div`
  display: flex;
  align-items: center;
`;

export const MemberAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 25px;
  margin-right: 10px;
`;

export const InsertClips = styled.h4`
  font-size: 14px;
  font-weight: 100;
  color: #7f868c;
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

  :first-child {
    text-decoration: line-through #798187;
  }
`;

export const SquareConfirmation = styled.p`
  width: 12px;
  height: 12px;
  border: 1px solid #798187;
  border-radius: 2px;
  margin-right: 8px;

  display: flex;

  img {
    width: 12px;
    height: 10px;
  }
`;

export const SubTasktitle = styled.h3`
  font-size: 12px;
  font-weight: 100;
  color: #798187;
`;

export const AddSubTask = styled.div`
  display: flex;
  padding-bottom: 14px;

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

export const AddCommit = styled.input`
  width: 75%;
  border: none;
  height: 25px;
  border-radius: 5px;
  padding-left: 20px;
`;

export const Commit = styled.div`
  width: 75%;
  height: 42px;
  display: flex;
  align-items: center;

  .cont {
    display: flex;
    flex-direction: column;
  }
`;

export const AvatarImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const UserNameCommit = styled.div`
  display: flex;
  line-height: 15px;
  align-items: baseline;
`;

export const Name = styled.h6`
  font-size: 8px;
  margin-right: 6px;
`;

export const Time = styled.p`
  font-size: 6px;
`;

export const UserCommit = styled.p`
  font-size: 8px;
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
