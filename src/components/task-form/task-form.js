import React from "react";

import "./task-form.css";

function TaskForm(props) {
  const { onClickElement } = props;
  let value = "New Task";

  function inputChange(e) {
    value = e.target.value;
  }

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Задача"
        onChange={inputChange}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary bg-info text-white"
          type="button"
          onClick={() => onClickElement("ADD", null, value)}
        >
          Добавить
        </button>
      </div>
    </div>
  );
}

export default TaskForm;
