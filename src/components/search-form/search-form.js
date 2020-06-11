import React from "react";
import "./search-form.css";

function SearchForm(props) {
    return(
        <input
            className="form-control form-control-sm mb-3"
            type="search"
            placeholder="&#128269;" 
            onChange={ (ev) => props.onClickElement("SEARCH", null, ev) } />
    );
}

export default SearchForm;