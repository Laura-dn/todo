import React, { Component } from "react";

import "./task-form.css";

export default class TaskForm extends Component
{
    state = {
        input: ""
    }

    onClickElement = () => {
        this.props.onClickElement("ADD", null, this.state.input);
        this.setState({ input: "" });
    }

    inputChange = (e) => {
        this.setState({ input: e.target.value });
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Задача"
                    onChange={ this.inputChange }
                    value={ this.state.input } />
            
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary bg-info text-white"
                        type="button"
                        onClick={ this.onClickElement }>
                        Добавить
                    </button>
                </div>
            </div>
        );
    }
}
