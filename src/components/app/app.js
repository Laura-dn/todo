import React, { Component } from 'react';
import ToDoList from '../to-do-list';
import Statistics from '../statistics';
import TaskForm from '../task-form';

import './app.css';

export default class App extends Component {
    state = {
        maxId: 4,
        listData: [
            {
                id: 1,
                task: "Listen a music",
                isDone: false,
                isImportant: false
            },
            {
                id: 2,
                task: "Have a dinner",
                isDone: true,
                isImportant: false
            },
            {
                id: 3,
                task: "Look a new film",
                isDone: false,
                isImportant: true
            },
            {
                id: 4,
                task: "Clean in the floor",
                isDone: true,
                isImportant: true
            }
        ]
    }

    onClickElement = (id, flag, value) => {
        let listData = [...this.state.listData];

        switch(flag) {
            case "DONE":
                listData.forEach(el => {
                    if(el.id === id) {
                        el.isDone = !el.isDone;
                    }
                });
                break;
            case "IMPORTANT":
                listData.forEach(el => {
                    if(el.id === id) {
                        el.isImportant = !el.isImportant;
                    }
                });
                break;
            case "ADD":
                listData.unshift(this.generateItem(value));
                break;
            case "DEL":
                listData = listData.filter(el => el.id !== id);
                break;
            default:
                console.log("ERROR");
                break;
        }

        this.setState({ listData });
    }

    generateItem(task) {
        const id = this.state.maxId + 1;
        this.setState({ maxId: id });

        return {
            id,
            task: task,
            isDone: false,
            isImportant: false
        }
    }
    
    render() {
        let listLen = this.state.listData.length,
            doneTasks = this.state.listData.reduce((counter, {isDone}) => counter += isDone ? 1 : 0, 0),
            importantTask = this.state.listData.reduce((counter, {isImportant}) => counter += isImportant ? 1 : 0, 0);

        return (
            <section className="app">
                <Statistics
                    all={ listLen }
                    done={ doneTasks }
                    imp={ importantTask } />
                
                <TaskForm 
                    onClickElement={ this.onClickElement }/>

                <ToDoList 
                    data={ this.state.listData }
                    onClickElement={ this.onClickElement } />
            </section>
        );
    }
}
