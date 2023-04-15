import React, { Children, useContext } from 'react'
import { DataContext } from '../App';


const Board = ({children}) => {
    const data = useContext(DataContext);
    console.log('data',data)

  return (
    <div id="taskBoard">
        
        {children}
        
    </div>
  )
}

export default Board