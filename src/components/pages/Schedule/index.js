import React from "react";
import { IoIosMore, IoIosAddCircle } from "react-icons/io";
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineUser,
} from "react-icons/ai";

import {
  Container,
  PlannerHead,
  Content,
  Calendar,
  Month,
  CalendarTasks,
  Day,
  DayMonth,
  Menu,
  CardTask,
} from "./styles";

function Schedule() {
  return (
    <Container>
      <PlannerHead>
        <div className="Tasks">
          <h2>Planner</h2>
        </div>
        <div className="Search">
          <IoIosMore />
        </div>
      </PlannerHead>
      <Content>
        <Calendar>
          <Month>Março</Month>
          <table id="data-table">
            <thead>
              <tr>
                <th>D</th>
                <th>S</th>
                <th>T</th>
                <th>Q</th>
                <th>Q</th>
                <th>S</th>
                <th>S</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="description"></td>
                <td class="description"></td>
                <td class="description">1</td>
                <td class="description">2</td>
                <td class="description">3</td>
                <td class="description">4</td>
                <td class="description">5</td>
              </tr>
              <tr>
                <td class="description">6</td>
                <td class="description">7</td>
                <td class="description">8</td>
                <td class="description">9</td>
                <td class="description">10</td>
                <td class="description">11</td>
                <td class="description">12</td>
              </tr>
              <tr>
                <td class="description">13</td>
                <td class="description" id="day">
                  <p>14</p>
                </td>
                <td class="description">15</td>
                <td class="description">16</td>
                <td class="description">17</td>
                <td class="description">18</td>
                <td class="description">19</td>
              </tr>
              <tr>
                <td class="description">20</td>
                <td class="description">21</td>
                <td class="description">22</td>
                <td class="description">23</td>
                <td class="description">24</td>
                <td class="description">25</td>
                <td class="description">26</td>
              </tr>
              <tr>
                <td class="description">27</td>
                <td class="description">28</td>
                <td class="description">29</td>
                <td class="description">30</td>
              </tr>
            </tbody>
          </table>
        </Calendar>
      </Content>
      <div>
        <CalendarTasks>
          <div className="dayspace">
            <Day>Seg</Day>
            <DayMonth>14</DayMonth>
          </div>
          <div class="tasklist">
            <CardTask className="FirstTask">
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
                <span className="taskname">Entrevista com a empresa</span>
                <h4>Descrição Descrição Descrição</h4>
              </div>
            </CardTask>
          </div>
        </CalendarTasks>
        <CalendarTasks>
          <div className="dayspace">
            <Day>Qua</Day>
            <DayMonth id="otherday">16</DayMonth>
          </div>
          <div class="tasklist">
            <CardTask className="FirstTask">
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
                <span className="taskname">Entrevista com a empresa</span>
                <h4>Descrição Descrição Descrição</h4>
              </div>
            </CardTask>
          </div>
        </CalendarTasks>
      </div>
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

export default Schedule;
