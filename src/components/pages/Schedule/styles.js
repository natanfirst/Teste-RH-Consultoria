import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f6f6f8;

  #data-table {
    width: 100%;
    border-spacing: 0 0.5rem;
    color: #969cb3;
  }

  #day {
    text-align: center;
    p {
      width: 22px;
      height: 22px;
      color: #fff;
      border-radius: 20px;
      background-color: #438dcb;
      border-radius: 11px;
    }
  }

  table th {
    color: #969cb3;
    background: white;
    text-align: left;
    font-weight: normal;
    padding: 10px 10px;
  }

  table tbody td {
    background: white;
    padding: 10px 10px;
    font-size: 15px;
  }
  td {
    color: black;
  }
`;

export const PlannerHead = styled.div`
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

export const Content = styled.div`
  display: flex;
  justify-content: center;
`;

export const Calendar = styled.div`
  width: 85%;
  background-color: #fefefe;
  border-radius: 22px;
`;

export const Month = styled.h2`
  color: #0374bb;
  font-size: 20px;
  padding-left: 14px;
  font-weight: 500;
`;

export const CalendarTasks = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 0 28px;

  display: flex;

  .tasklist {
    width: 80%;

    .SecondTask {
      background: #f9cb77;
      h4 {
        font-size: 10px;
        color: #d6a448;
      }
    }
  }
  #otherday {
    background: none;
    color: black;
  }

  .dayspace {
    width: 20%;
  }
`;

export const Day = styled.div``;

export const DayMonth = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  background: #358dc6;
  color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const CardTask = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  margin-bottom: 0.9em;
  background: #f18d85;

  display: flex;

  span {
    color: #fff;
    font-size: 14px;
    line-height: 24px;
  }

  h4 {
    font-size: 10px;
    color: #ea6059;
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
