import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState('');

    function handleInputChange(event) {
        setNewTasks(event.target.value);
    }

    function addTask(){
        if (newTasks.trim() !== '') {
            setTasks(t => [...t, newTasks]);
            setNewTasks('');
        } 
    }

    function deleteTask(index){
        setTasks(t => t.filter((_, i) => i !== index));
    }

    function moveTaskUp(index){
        if (index > 0) {
            setTasks(t => {
                const newTasks = [...t];
                [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
                return newTasks;
            });
        }
    }


    function moveTaskDown(index){
        if (index < tasks.length - 1) {
            setTasks(t => {
                const newTasks = [...t];
                [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
                return newTasks;
            });
        }
    }


   return(
   <div className="to-do-list">
    
    <h1>To-Do-Lists</h1>
    
    <div>
        <input
            type="text"
            placeholder="Enter a task.."
            value={newTasks}
            onChange={handleInputChange}/>
        <button className="add-buttton" onClick={addTask}>Add Task</button>
    </div>

    <ul>
        {tasks.map((task, index) => 
            <li key={index}>
                {task}
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                <button className="move-up-button" onClick={() => moveTaskUp(index)}>Move Up</button>
                <button className="move-down-button" onClick={() => moveTaskDown(index)}>Move Down</button>
            </li>
        )}
    </ul>

    </div>);
}

export default ToDoList;
