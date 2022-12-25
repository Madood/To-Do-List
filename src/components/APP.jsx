import React, { useState } from 'react';
import "../Styles/Fruits.css";
import ToDoItem from "./Todoitem";
import Tareekh from './Tareekh';
import Time from "./Time";




function App() {


        const [inputText, setinputText] = useState("");
        const [items, setItems] = useState([]);

        function handleChange(event) {
                const newValue = event.target.value;
                setinputText(newValue);
        }
        function addItem() {
                setItems(prevItems => {
                        return [...prevItems, inputText];
                });
        }

        function delteItem(id) {
                setItems(prevItems => {
                        return (prevItems.slice(1)
                        )
                });
        }


        return (
                <>
                        <div className='Header'>
                                <Tareekh />
                                <Time />
                        </div>
                        <div className='Box'>


                                <div className='form'>
                                        <h1>Daily To-do-List</h1>
                                        <input onChange={handleChange} type="text" required />
                                        <button onClick={addItem}><span>Add</span></button>
                                        <button onClick={delteItem}><span>X</span></button>
                                        <button ><span>Save</span></button>
                                </div>
                                <div>
                                        <ol>
                                                {items.map((todoItem, index) => {
                                                        return (
                                                                <ToDoItem
                                                                        key={index}
                                                                        id={index}
                                                                        text={todoItem}
                                                                        onClick={delteItem}
                                                                />

                                                        )
                                                }
                                                )}
                                        </ol>
                                </div>

                        </div>


                </>
        )


}

export default App;