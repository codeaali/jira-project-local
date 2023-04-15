import React, { useContext } from 'react'
import { DataContext } from '../App'

const Pending = () => {
    const data = useContext(DataContext)
    const { tasks } = data;
    return (
        <>
            <div className="taskColumn">
                <div className="columnHeader">
                    <h3>Pending</h3>
                </div>
                <div class="taskItems">
                {tasks.map((item)=>{
                   return item.category == 'pending' ? (
                        <div className="taskItem" key={item.id}>
                        <p>{item.task}</p>
                        <button className="taskButton move">Move</button>
                    </div>
                    ) : null
                    
                })}
                </div>
            </div>
        </>
    )
}

export default Pending