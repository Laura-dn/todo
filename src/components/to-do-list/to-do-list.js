import React from "react";
import ListItem from "../list-item";

import "./to-do-list.css";

function ToDoList(props) {
    const { data, onClickElement } = props;

    return (
        <ul className="list-group">
            {data.map((task) => (
                <ListItem
                    key={ task.id }
                    { ...task }
                    onClickElement={ onClickElement } />
            ))}
        </ul>
    );
}

export default ToDoList;
