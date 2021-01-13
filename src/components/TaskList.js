import React from 'react';
import Task from './Task';
import "./TaskList.css";

const TaskList = (props) => {

  const active = props.tasks.filter(task => task.isActive);
  const done = props.tasks.filter(task => !task.isActive);

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1
      }
      if (a.finishDate > b.finishDate) {
        return -1
      }
      return 0
    })
  }
  if (active.length >= 2) {
    active.sort((a, b) => {

      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0
    })
  }




  // console.log(active, done);
  const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
  const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

  return (
    <>
      <div className="content__active">
        <h1 className="content__active__label">Zadania do zrobienia</h1>
        {activeTasks.length > 0 ? activeTasks : <p style={{ margin: "0 0 0 10px" }}>brak zadań!</p>}
      </div>

      <hr />

      <div className="content__done">
        <h3 className="content__done__label">Zadania zrobione <em>({done.length})</em></h3>
        {done.length > 5 && <span style={{ fontSize: 10 }}>wyświetlonych jest jedynie 5 ostatnich zadań</span>}
        {doneTasks.slice(0, 5)}

      </div>
    </>
  );
}

export default TaskList;