import React from "react";

function ToDoItem(props) {
        return (
                <div>
                       <li>{props.text}</li>
                </div>
        );
}

export default ToDoItem;
