import React, { Component } from "react";
import ToDoList from "../to-do-list";
import Statistics from "../statistics";
import TaskForm from "../task-form";
import ClearList from "../clear-list";

import "./app.css";

export default class App extends Component {
    state = {
        maxId: 0,
        listData: []
    };

    constructor(props) {
        super(props);
        this.dbFirstInit(); //Инициализируем первый вход в БД
        this.crud("read"); //Вычитываем значения с БД
    }

    //Первая инициализация БД
    dbFirstInit() {
        const req = window.indexedDB.open("listBank", 1);

        req.onupgradeneeded = ev => {
            ev.target.result.createObjectStore("tasks", {
                keyPath: "id"
            });
        };
    }

    //Вычитываем БД
    stateInit(trans, data) {
        trans.onsuccess = ev => {
            let listData = ev.target.result,  //Вытягиваем все
                maxId = listData.reduce ((max, { id }) => {return max > id ? max : id;}, 0);

            // switch(data) {
            //     case "ONLYDONE":
            //         listData = listData.filter(el => el.isDone === true); //Оставляем только выполненные
            //         break;
            //     case "ONLYIMPORTANT":
            //         listData = listData.filter(el => el.isImportant === true);  //Оставляем только важные
            //         break;
            //     default:
                    
            //         this.setState({ maxId });
            //         break;
            // }

            this.setState({ listData, maxId });
        };
    }

    //Контроллер на создание/чтение/обновление/удаление в БД (и удалить все)
    crud(type, data) {
        const req = window.indexedDB.open("listBank", 1);
        const accessType = type === "read" ? "readonly" : "readwrite";

        req.onsuccess = () => {
            const trans = req.result.transaction("tasks", accessType),
                  tasks = trans.objectStore("tasks");

            switch (type) {
                case "create": {
                    tasks.add(data);
                    break;
                }
                case "read": {
                    this.stateInit(tasks.getAll());
                    break;
                }
                case "update": {
                    tasks.put(data);
                    break;
                }
                case "delete": {
                    tasks.delete(data);
                    break;
                }
                case "DELALL": {
                    tasks.clear();
                    break;
                }
                default: {
                    console.log("ERROR");
                    break;
                }
            }
        };
    }

    //Генератор новой Записи в Списке
    generateItem(task) {
        if(task.length === 0) {
            task = "New task";
        }

        const id = this.state.maxId + 1;
        this.setState({ maxId: id });

        return {
            id,
            task: task,
            isDone: false,
            isImportant: false
        };
    }

    //Контроллер на Клик по flag
    onClickElement = (flag, id, value) => {
        let listData = [...this.state.listData];

        switch (flag) {
            case "DONE":
                listData.forEach(el => {
                    if (el.id === id) {
                        el.isDone = !el.isDone;
                        this.crud("update", el);
                    }
                });
                break;
            case "IMPORTANT":
                listData.forEach(el => {
                    if (el.id === id) {
                        el.isImportant = !el.isImportant;
                        this.crud("update", el);
                    }
                });
                break;
            case "ADD":
                let item = this.generateItem(value);

                listData.push(item);
                this.crud("create", item);
                break;
            case "DEL":
                listData = listData.filter(el => el.id !== id);
                this.crud("delete", id);
                break;
            case "ONLYDONE":
                this.crud("read", flag);
                break;
            case "ONLYIMPORTANT":
                this.crud("read", flag);
                break;
            case "ALLTASKS":
                this.crud("read");
                break;
            case "DELALL":
                this.crud(flag);
                break;
            default:
                console.log("ERROR");
                break;
        }

        this.setState({ listData });
    };

    getStatistics() {

    }

    render() {
        let listLen = this.state.listData.length,
            doneTasks = this.state.listData.reduce((counter, { isDone }) => (counter += isDone ? 1 : 0), 0),
            importantTask = this.state.listData.reduce((counter, { isImportant }) => (counter += isImportant ? 1 : 0), 0);

        return (
            <section className="app text-center">
                <Statistics
                    all={ listLen }
                    done={ doneTasks }
                    imp={ importantTask }
                    onClickElement={ this.onClickElement }
                />

                <TaskForm onClickElement={ this.onClickElement } />

                <ToDoList
                    data={ this.state.listData }
                    onClickElement={ this.onClickElement }
                />

                <ClearList onClickElement={ this.onClickElement } />
            </section>
        );
    }
}
