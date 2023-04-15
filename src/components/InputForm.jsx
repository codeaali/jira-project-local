import React from 'react'

const InputForm = () => {
  return (
    <div id="taskForm">
    <h3>Add New Task</h3>
    <div class="formField">
        <input type="text" class="taskInput" />
        <button class="taskSubmit">Submit</button>
    </div>
</div>
  )
}

export default InputForm