import React from "react";
import ListItem from "../list-item";

import "./to-do-list.css";

function ToDoList(props) {
  const { data, onClickElement } = props;

  return (
    <ul className="list-group">
      {data.map(({ id, task, isDone, isImportant }) => (
        <ListItem
          key={id}
          id={id}
          task={task}
          isDone={isDone}
          isImportant={isImportant}
          onClickElement={onClickElement}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
