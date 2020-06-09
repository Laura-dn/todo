import React from 'react';
import './list-item.css';

function ListItem(props) {
    const { id, task, isDone, isImportant, onClickElement } = props;
    let classes = "list-group-item d-flex align-items-center justify-content-between pointer";
    
    classes += isDone ? " done" : "";
    classes += isImportant ? " important" : "";

    return (
        <li className={ classes }>
            <span  className="container-sm" onClick={ () => onClickElement(id, "DONE") }>{ task }</span>

            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-warning" onClick={ () => onClickElement(id, "IMPORTANT") }>
                    <i className="fas fa-hand-point-up"></i>
                </button>

                <button type="button" className="btn btn-danger" onClick={ () => onClickElement(id, "DEL") }>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    );
}

export default ListItem;
