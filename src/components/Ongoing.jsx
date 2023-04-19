import React, { useContext } from 'react'
import { DataContext, DataSetterContext } from '../App'

const Ongoing = () => {
    const data = useContext(DataContext)
    const setData = useContext(DataSetterContext)
    const { tasks } = data;
    const handleOngoing = (id) => {
        const newData = tasks?.map((item)=>{
             return (item.id == id ? {...item,category: "completed"} : item)
            
        })
         setData({...data,tasks:newData});
         console.log({newData})


    }
  return (
    <div class="taskColumn">
            <div class="columnHeader">
                <h3>Ongoing</h3>
            </div>
            <div class="taskItems">
            {tasks?.map((item)=>{
                   return item.category == 'ongoing' ? (
                        <div className="taskItem" key={item.id}>
                        <p>{item.task}</p>
                        <button onClick={() => handleOngoing(item.id)} className="taskButton move">Move</button>
                        </div>
                    ) : null
                    
                })}
                
                
            </div>
        </div>
  )
}

export default Ongoing