import React , { useContext } from "react";
import { REMOVE_TODO } from "../context/action.type";
import { TodoContext } from "../context/todoContext";

function TodoList() {
    const { todolist , dispatch } = useContext(TodoContext);
    return (
        <div className = "cls_ListWrapper">
            {
                todolist.map( item => {
                    return (
                        <div className = "cls_ListCont" key = {item.id}>
                            {item.description} 
                            <span className = "cls_removeBtn" 
                            onClick = {() => {
                                dispatch({
                                    type: REMOVE_TODO, 
                                    payload: item.id
                                })
                            }}>
                                DELETE
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoList;