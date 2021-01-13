import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

toast.configure();

class App extends Component {
  counter = 6;
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać wreszcie w Bloodborne'a",
        date: "2020-02-15",
        isImportant: true,
        isActive: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "zrobić dobry uczynek",
        date: "2020-11-12",
        isImportant: false,
        isActive: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "pomalować mieszkanie po sylwestrze",
        date: "2020-09-11",
        isImportant: false,
        isActive: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "schudnąć 30 kilogramów",
        date: "2020-05-20",
        isImportant: true,
        isActive: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "sprzedać butelki po piwie (20 skrzynek)",
        date: "2020-11-12",
        isImportant: false,
        isActive: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    //console.log("delete elementu o id " + id);

    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    //console.log("change w stanie elementu o id " + id);
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.isActive = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  addTask = (text, date, isImportant) => {
    // console.log("dodany obiekt");
    const task = {
      id: this.counter,
      text,
      date,
      isImportant,
      isActive: true,
      finishDate: null,
    };
    this.counter++;
    //console.log(task, this.counter);

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    return true;
  };

  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="main__content">
            <h1 className="main__title">TODO APP</h1>
            <AddTask add={this.addTask} />
          </div>
        </div>
        <div className="content">
          <TaskList
            tasks={this.state.tasks}
            delete={this.deleteTask}
            change={this.changeTaskStatus}
          />
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
