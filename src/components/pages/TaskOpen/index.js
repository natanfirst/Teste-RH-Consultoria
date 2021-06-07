import React from "react";

import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineUser,
  AiOutlineTag,
} from "react-icons/ai";
import { IoIosAddCircle, IoIosMore } from "react-icons/io";
import { GiPaperClip } from "react-icons/gi";
import { BsArrowReturnRight, BsArrowLeft } from "react-icons/bs";
import Avatar from "../../../assets/img/member.jpeg";

import {
  Container,
  Content,
  Menu,
  InsertInformations,
  InsertTitle,
  AddDescription,
  InsertData,
  InsertCategory,
  AddMember,
  MemberAvatar,
  InsertClips,
  SubTasks,
  SubTask,
  SquareConfirmation,
  SubTasktitle,
  AddSubTask,
  AddSubTaskTitle,
  AddCommit,
  Commit,
  AvatarImage,
  Name,
  Time,
  UserNameCommit,
  UserCommit,
} from "./styles";

function TaskOpen() {
  return (
    <Container>
      <div className="Title">
        <a href="/home">
          <BsArrowLeft />
        </a>
        <IoIosMore />
      </div>
      <Content>
        <InsertInformations>
          <InsertTitle>Desafio de Design UI/UX</InsertTitle>
          <AddDescription>Descrição Descrição Descrição</AddDescription>
          <div id="insvg">
            <AiOutlineCalendar />
            <InsertData>30 de outubro</InsertData>
          </div>
          <div id="insvg">
            <AiOutlineTag />
            <InsertCategory>Trabalho</InsertCategory>
          </div>
          <div id="insvg">
            <AddMember>
              <MemberAvatar src={Avatar} />
              <MemberAvatar src={Avatar} />
              <IoIosAddCircle className="AddSvg" />
            </AddMember>
          </div>
          <div id="insvg">
            <GiPaperClip />
            <InsertClips>Anexos</InsertClips>
          </div>
        </InsertInformations>
        <p className="LineDivision" />
        <SubTasks>
          <SubTask>
            <SquareConfirmation>
              <img src="https://pngimage.net/wp-content/uploads/2018/06/visto-verde-png.png" />
            </SquareConfirmation>
            <SubTasktitle>Wireframes</SubTasktitle>
          </SubTask>
          <SubTask>
            <SquareConfirmation />
            <SubTasktitle>Apresentação</SubTasktitle>
          </SubTask>
          <SubTask>
            <SquareConfirmation />
            <SubTasktitle>Enviar</SubTasktitle>
          </SubTask>
          <AddSubTask>
            <BsArrowReturnRight />
            <AddSubTaskTitle>Adicionar sub-tarefas</AddSubTaskTitle>
          </AddSubTask>
        </SubTasks>
        <p className="LineDivision2" />
        <AddCommit placeholder="Adicionar comentário" />
        <Commit>
          <AvatarImage src={Avatar} />
          <div className="cont">
            <UserNameCommit>
              <Name>Paulo Freire</Name>
              <Time>Há 6 min</Time>
            </UserNameCommit>
            <div>
              <UserCommit>Comentário Comentário Comentário</UserCommit>
            </div>
          </div>
        </Commit>
        <Menu>
          <a href="/home">
            <AiOutlineHome />
          </a>
          <a href="/planer">
            <AiOutlineCalendar />
          </a>
          <AiOutlineUser />
          <a href="/newtask">
            <IoIosAddCircle id="addnewtask" />
          </a>
        </Menu>
      </Content>
    </Container>
  );
}

export default TaskOpen;
