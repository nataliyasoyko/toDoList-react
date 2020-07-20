import React from "react";
import "./style.css";

const Tasks = (props) => (
    <ul 
    className="tasks__items">
        {props.tasks.map(task => (
            <li
            key={task.id} className={`tasks__item${task.done && props.hideDone ? " tasks__item--hidden" : ""}`}
            >
            <button className="tasks__button tasks__button--done">
            <i className={`fas fa-check${task.done ? "" : " fa-check--none" }`}></i>
            </button>
            <span className={`tasks__text${task.done ? " tasks__text--done" : ""}`}>{task.content}</span>
            <button className="tasks__button tasks__button--delete">
            <i className="far fa-trash-alt"></i>
            </button>
            </li>
        ))}
    </ul>
        );

export default Tasks;