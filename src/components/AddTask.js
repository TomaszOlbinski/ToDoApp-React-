import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './AddTask.css';

const AddTask = props => {

  const minDate = new Date().toISOString().slice(0, 10);
  let maxDate = minDate.slice(0, 4) * 1 + 1;
  // console.log(maxDate);
  maxDate = maxDate + "-12-31";

  const [request, setRequest] = useState({
    text: '',
    checked: false,
    date: minDate
  });

  const handleText = e => {
    setRequest({
      ...request,
      text: e.target.value
    });
  };

  const handleCheckbox = e => {
    setRequest({
      ...request,
      checked: e.target.checked
    });
  };

  const handleDate = e => {
    setRequest({
      ...request,
      date: e.target.value
    });
  };

  const handleClick = () => {
    //console.log("dodaj");

    const { text, checked, date } = request;

    if (text.length > 2) {
      const add = props.add(text, date, checked);
      if (add) {
        setRequest({
          ...request,
          text: '',
          checked: false,
          date: minDate
        });
        toast.success("Dodano pomyślnie!");
      }
    } else if (text.length === 0) {
      toast.error('Nie wpisano zadania!');
    } else {
      toast.error('Tekst jest za krótki!');
    }
  };

  const { text, checked, date } = request;

  return (
    <div className="main__form">
      <div className="form__wrap1">
        <input type="text" className="form-control main__form__text" placeholder="dodaj zadanie" value={text} onChange={handleText} />
        <input className="main__form__checkbox" type="checkbox" checked={checked} id="important" onChange={handleCheckbox} />
        <label className="main__form__chblabel" htmlFor="important">Priorytet</label>
      </div>
      <div className="form__wrap2">
        <div className="main__form__datecontent">
          <label className="main__form__datelabel" htmlFor="date">Do kiedy zrobić</label>
          <input className="form-control main__form__date" type="date" value={date} min={minDate} max={maxDate} onChange={handleDate} />
        </div>
        <button className="btn btn-success btn-lg form__main__btn" onClick={handleClick}>Dodaj</button>
      </div>
    </div>
  )
}

export default AddTask;