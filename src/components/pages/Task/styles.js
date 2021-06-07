import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 740px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .ComingTaks {
    width: 90%;
    text-align: start;
    margin-bottom: 1em;

    h3 {
      font-size: 15px;
      color: #0372b9;
      margin-bottom: 1em;
    }
  }
  span.taskname {
    color: #fff;
    font-size: 14px;
  }

  .MoreDoing {
    width: 90%;
    text-align: end;

    a {
      font-size: 13px;
    }
  }
`;

export const TaskHead = styled.div`
  width: 100%;
  height: 6vh;
  display: flex;
  align-items: center;
  margin-bottom: 1em;

  .Tasks {
    width: 90%;
    text-align: center;

    h2 {
      font-size: 16px;
      color: #232021;
      font-weight: 100;
      padding-left: 30px;
    }
  }

  .Search {
    width: 10%;

    svg {
      font-size: 16px;
    }
  }
`;

export const TaskList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .FirstTask {
    background: #ef8b83;
    h4 {
      font-size: 10px;
      color: #ea6059;
    }
  }

  .SecondTask {
    background: #f9cb77;
    h4 {
      font-size: 10px;
      color: #d6a448;
    }
  }

  .ThirdTask {
    background: #5ea9dc;
    h4 {
      font-size: 10px;
      color: #187cbf;
    }
  }

  .more {
    width: 90%;
    text-align: end;

    a {
      font-size: 13px;
    }
  }
`;

export const CardTask = styled.a`
  width: 90%;
  height: 60px;
  border-radius: 10px;
  margin-bottom: 0.9em;

  display: flex;

  span {
    line-height: 24px;
  }

  p {
    width: 20px;
    height: 20px;
    border: 2px solid #fff;
    border-radius: 4px;

    img {
      width: 18px;
    }
  }
  .Confirmate {
    width: 20%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .TaskText {
    width: 80%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const ViewMore = styled.a``;

export const Doing = styled.div`
  width: 90%;
  height: 118px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  padding-left: 20px;
  overflow-x: auto;

  #red{
    background: #ef8b83;

    h4{
      color: #ea6059;
    }
    h6{
      color: #ea6059;
    }
    p{
      width: 37%;
      background-color: #ea6059;
    }
  }
  #blue{
    background: #5ea9dc;

    h4{
      color: #187cbf;
    }
    h6{
      color: #187cbf;
    }
    p{
      width: 22%;
      background-color: #187cbf;
    }
  }
`;

export const CardProgress = styled.div`
  width: 140px;
  height: 110px;
  background: #f9cb77;
  border-radius: 10px;
  padding: 12px;

  h4 {
    font-size: 10px;
    color: #d6a448;
    line-height: 20px;
  }
  h6 {
    font-size: 18px;
    color: #d6a448;
    padding-bottom: 5px;
  }

  .ProgressLine {
    width: 100%;
    height: 5px;
    background: #fff;

    p {
      width: 56%;
      height: 5px;
      background: #d6a448;
    }
  }
`;

export const Completed = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardCompleted = styled.div`
  width: 90%;
  height: 60px;
  background: #e6eef3;
  border-radius: 10px;

  display: flex;

  .Confirmed {
    width: 20%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .CompletedTask {
    width: 80%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  p {
    width: 20px;
    height: 20px;
    border: 2px solid #fff;
    border-radius: 4px;

    img {
      width: 20px;
    }
  }

  span {
    color: black;
    line-height: 24px;
  }

  h4 {
    color: #babdc4;
    font-size: 10px;
  }
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
