import React from 'react'
import { useState } from 'react'
import "./TodoList.css"


function TodoList() {

const [tasks, setTasks]=useState([]);
const [newTask, setNewTasks]=useState("");

function handleInputChange(event){
setNewTasks(event.target.value)
}

function addTask(){
    if(newTask.trim() !==""){
setTasks(t=>[...t, newTask]);
setNewTasks("");
    }
}

function deleteTask(index){
const updatedTasks=tasks.filter((element, i) => i !== index);
setTasks(updatedTasks);
}
  return (
    <>
      <div className="todolist">
        <h1>To Do List</h1>
        <div>
            <input type="text" placeholder='Enter a Task' value={newTask} onChange={handleInputChange} />
            <button className="addbutton" onClick={addTask}>Add</button>
        </div>
        <div className="listitems">
        <ol>
            {tasks.map((task, index)=><li key={index}>
                <span className="task">{task}</span>
                <button className="delete" onClick={()=>deleteTask(index)}>Delete</button>
            </li>)}
        </ol>
</div>
      </div>
    </>
  )
}

export default TodoList
