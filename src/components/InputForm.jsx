import React, { useContext, useState } from 'react'
import { DataContext, DataSetterContext } from '../App';

const InputForm = () => {
  const [input,setInput] = useState('')
  const [id,setId] = useState(0)
  const data = useContext(DataContext)
  const setData = useContext(DataSetterContext)
  const { tasks } = data;
  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = () => {
    let lastId = tasks[tasks.length-1].id
    let newArr = [...tasks,{
      id: lastId + 1,
      category: "pending",
      task: input}]
    setData({...data,tasks:newArr})
  }

  return (
    <div id="taskForm">
    <h3>Add New Task</h3>
    <div class="formField">
        <input value={input} onChange={(e)=>handleInput(e)} type="text" class="taskInput" />
        <button onClick={handleSubmit} class="taskSubmit">Submit</button>
    </div>
</div>
  )
}

export default InputForm