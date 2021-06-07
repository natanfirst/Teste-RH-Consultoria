import React from "react";

import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineUser,
  AiOutlineTag,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { GiPaperClip } from "react-icons/gi";
import { BsArrowReturnRight } from "react-icons/bs";

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
  InsertClips,
  SubTasks,
  SubTask,
  SquareConfirmation,
  SubTasktitle,
  AddSubTask,
  AddSubTaskTitle,
} from "./styles";

function NewTask() {
  return (
    <Container>
      <div className="Title">
        <h1>Criar Tarefa</h1>
      </div>
      <Content>
        <p className="TopDivision" />
        <InsertInformations>
          <InsertTitle placeholder="Digite o Titulo" />
          <AddDescription placeholder="Adicione uma Descrição(opcional)" />
          <div id="insvg">
            <AiOutlineCalendar />
            <InsertData placeholder="Inserir prazo" />
          </div>
          <div id="insvg">
            <AiOutlineTag />
            <InsertCategory placeholder="Inserir categoria" />
          </div>
          <div id="insvg">
            <AiOutlineUsergroupAdd />
            <AddMember placeholder="Adicionar membros" />
          </div>
          <div id="insvg">
            <GiPaperClip />
            <InsertClips placeholder="Inserir anexos" />
          </div>
        </InsertInformations>
        <p className="LineDivision" />
        <SubTasks>
          <SubTask>
            <SquareConfirmation />
            <SubTasktitle>Tomar café e estudar react</SubTasktitle>
          </SubTask>
          <SubTask>
            <SquareConfirmation />
            <SubTasktitle>Almoçar e trabalhar</SubTasktitle>
          </SubTask>
          <SubTask>
            <SquareConfirmation />
            <SubTasktitle>Dormir</SubTasktitle>
          </SubTask>
          <AddSubTask>
            <BsArrowReturnRight />
            <AddSubTaskTitle>Adicionar sub-tarefas</AddSubTaskTitle>
          </AddSubTask>
        </SubTasks>
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

export default NewTask;
