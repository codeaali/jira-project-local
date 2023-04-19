import React, { useContext } from 'react'
import { DataContext, DataSetterContext } from '../App';

const Completed = () => {
    const data = useContext(DataContext)
    const setData = useContext(DataSetterContext)
    const { tasks } = data;
    const handleDel = (id) => {
        const newData = tasks?.filter((item)=>{
             return (item.id != id)
            
        })
         setData({...data,tasks:newData});
         console.log({newData})

    }
  return (
    <div class="taskColumn">
            <div class="columnHeader">
                <h3>Completed</h3>
            </div>
            <div class="taskItems">
            {tasks?.map((item)=>{
                   return item.category == 'completed' ? (
                        <div className="taskItem" key={item.id}>
                        <p>{item.task}</p>
                        <button onClick={() => handleDel(item.id)} className="taskButton move">Move to QA</button>
                        </div>
                    ) : null
                    
                })}
               
                
            </div>
        </div>
  )
}

export default Completed