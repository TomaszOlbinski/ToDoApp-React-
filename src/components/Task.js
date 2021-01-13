import React from 'react';
import "./Task.css";

const Task = (props) => {

  const style = {
    color: 'red',
  }

  const { text, date, id, isActive, isImportant, finishDate } = props.task;

  if (isActive) {
    return (
      <div className="content__active__task">
        <p className="content__active__p">
          <strong style={isImportant ? style : null}>{text}</strong> - do <span>{date} </span>
        </p>
        <div className="content_active_btnwrap">
          <button className="btn btn-primary" onClick={() => props.change(id)}>Zostało zrobione</button>
          <button className="btn btn-danger" onClick={() => props.delete(id)}>X</button>
        </div>

      </div>
    );
  } else {

    const finish = new Date(finishDate).toLocaleString()
    return (
      <div className="content__done__task">
        <p className="content__done__p">
          <strong>{text}</strong><em> (zrobić do {date})</em><br />
          - potwierdzenie wykonania<span> {finish}</span>
        </p>
        <button className="btn btn-danger btn-lg" onClick={() => props.delete(id)}>X</button>
      </div>
    )
  }
}

export default Task;