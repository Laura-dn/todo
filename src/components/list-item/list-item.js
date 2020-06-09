import React from "react";
import "./list-item.css";

function ListItem(props) {
    const { id, task, isDone, isImportant, onClickElement } = props;
    let classes = "list-group-item d-flex align-items-center justify-content-between pointer"; //Классы Задачи по умолчанию

    //Добавляем класс, если выполнено Задание
    classes += isDone ? " done" : "";
    //Добавляем класс, если Задание важное
    classes += isImportant ? " important" : "";

    //Возвращаем Задание в Список
    return (
        <li className={ classes }>
            <span className="container-sm text-left" onClick={ () => onClickElement("DONE", id) }>
                { task }
            </span>

            <div className="btn-group" role="group" aria-label="Basic example">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={ () => onClickElement("IMPORTANT", id) }>
                    
                    <i className="fas fa-hand-point-up" />
                </button>

                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={ () => onClickElement("DEL", id) }>
                    
                    <i className="fas fa-trash-alt" />
                </button>
            </div>
        </li>
    );
}

export default ListItem;
