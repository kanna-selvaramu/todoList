import React, { useContext, useState } from "react";
import '../App.css';
import { ADD_TODO } from "../context/action.type";
import { TodoContext } from "../context/todoContext";
import { v4 } from "uuid";

function TodoInput() {
    const [taskDesc , setTaskDesc] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleAdd = e => {
        console.log("handleAdd", e , dispatch);
        if(taskDesc === "") {
            alert("Enter a valid string");
        }
        else {
            const todoItem = {
                id: v4(), 
                description: taskDesc, 
                status: "active"
            }
            console.log("todoItem", todoItem)
            dispatch({
                type : ADD_TODO, 
                payload: todoItem
            }); 
        }
        setTaskDesc("");
    }

    return (
        <div className="cls_InpWrapper">
            <input className = "cls_TaskInput" type="text" name="taskDesc" placeholder="Enter your tasks here" value = {taskDesc} onChange={(e) => setTaskDesc(e.target.value)}/>
            <div className = "cls_AddBtn" onClick = {(e) => handleAdd(e)}>
                Add
            </div>
        </div>
    );
}

export default TodoInput;
