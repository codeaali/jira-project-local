import React, { useContext, useEffect } from 'react'
import { DataContext, DataSetterContext } from '../App'

const Pending = () => {
    const data = useContext(DataContext)
    const setData = useContext(DataSetterContext)
    const { tasks } = data;
    console.log({tasks});
    
    const handlePending = (id) => {
        const newData = tasks?.map((item)=>{
             return (item.id == id ? {...item,category: "ongoing"} : item)
            
        })
         setData({...data,tasks:newData});
         console.log({newData})


    }
    return (
        <>
            <div className="taskColumn">
                <div className="columnHeader">
                    <h3>Pending</h3>
                </div>
                <div class="taskItems">
                {tasks?.map((item)=>{
                   return item.category == 'pending' ? (
                        <div className="taskItem" key={item.id}>
                        <p>{item.task}</p>
                        <button onClick={() => handlePending(item.id)} className="taskButton move">Move</button>
                    </div>
                    ) : null
                    
                })}
                </div>
            </div>
        </>
    )
}

export default Pending