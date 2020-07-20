import React from "react";
import "./style.css";

const Tasks = ({tasks, hideDone, removeTask, toggleTaskDone}) => (
    <ul 
    className="tasks__items">
        {tasks.map(task => (
            <li
            key={task.id} className={`tasks__item${task.done && hideDone ? " tasks__item--hidden" : ""}`}
            >
            <button 
            onClick={() => toggleTaskDone(task.id)}
            className="tasks__button tasks__button--done">
            <i className={`fas fa-check${task.done ? "" : " fa-check--none" }`}></i>
            </button>
            <span className={`tasks__text${task.done ? " tasks__text--done" : ""}`}>{task.content}</span>
            <button  
            onClick={() => removeTask(task.id)}
            className="tasks__button tasks__button--delete">
            <i className="far fa-trash-alt"></i>
            </button>
            </li>
        ))}
    </ul>
        );

export default Tasks;