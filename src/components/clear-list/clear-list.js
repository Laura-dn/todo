import React from "react";

import "./clear-list.css";

function ClearList(props) {
    const { onClickElement } = props;

    return (
        <button 
            type="button" 
            className="btn btn-danger mt-3" 
            onClick={ () => onClickElement("DELALL") }>
            Удалить Список
        </button>
    );
}

export default ClearList;
