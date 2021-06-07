import React from "react";

import { FiSearch } from "react-icons/fi";
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineUser,
} from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";

import {
  Container,
  TaskHead,
  TaskList,
  CardTask,
  ViewMore,
  Doing,
  CardProgress,
  Completed,
  CardCompleted,
  Menu,
} from "./styles";

function Task() {
  return (
    <Container>
      <TaskHead>
        <div className="Tasks">
          <h2>Tarefas</h2>
        </div>
        <div className="Search">
          <FiSearch />
        </div>
      </TaskHead>
      <div className="ComingTaks">
        <h3>A FAZER</h3>
      </div>
      <TaskList>
        <CardTask className="FirstTask" href="/taskopen">
          <div className="Confirmate">
            <p />
          </div>
          <div className="TaskText">
            <span className="taskname">Desafio de Design UI/UX</span>
            <h4>Descrição Descrição Descrição</h4>
          </div>
        </CardTask>
        <CardTask className="SecondTask">
          <div className="Confirmate">
            <p />
          </div>
          <div className="TaskText">
            <span className="taskname">Entrevista com a Empresa</span>
            <h4>Descrição Descrição Descrição</h4>
          </div>
        </CardTask>
        <CardTask className="ThirdTask">
          <div className="Confirmate">
            <p />
          </div>
          <div className="TaskText">
            <span className="taskname">Contratação</span>
            <h4>Descrição Descrição Descrição</h4>
          </div>
        </CardTask>
        <div className="more">
          <ViewMore>Ver Todos</ViewMore>
        </div>
      </TaskList>
      <div className="ComingTaks">
        <h3>EM PROGRESSO</h3>
      </div>
      <Doing>
        <CardProgress>
          <span className="taskname">Entrevista</span>
          <h4>Descrição Descri..</h4>
          <h6>56%</h6>
          <div className="ProgressLine">
            <p />
          </div>
        </CardProgress>
        <CardProgress id="red">
          <span className="taskname">Desafio</span>
          <h4>Descrição Descri..</h4>
          <h6>37%</h6>
          <div className="ProgressLine">
            <p />
          </div>
        </CardProgress>
        <CardProgress id="blue">
          <span className="taskname">Contratação</span>
          <h4>Descrição Descri..</h4>
          <h6>22%</h6>
          <div className="ProgressLine">
            <p />
          </div>
        </CardProgress>
      </Doing>
      <div className="MoreDoing">
        <ViewMore>Ver Todos</ViewMore>
      </div>
      <div className="ComingTaks">
        <h3>CONCLUÍDO</h3>
      </div>
      <Completed>
        <CardCompleted>
          <div className="Confirmed">
            <p>
              <img src="https://pngimage.net/wp-content/uploads/2018/06/visto-verde-png.png" />
            </p>
          </div>
          <div className="CompletedTask">
            <span>Inscrição</span>
            <h4>Descrição Descrição Descrição</h4>
          </div>
        </CardCompleted>
      </Completed>
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
    </Container>
  );
}

export default Task;
