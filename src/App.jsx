import { createContext, useState } from 'react'
import './App.css'
import './assets/styles/style.scss'
import InputForm from './components/InputForm'
import Board from './components/Board'
import Ongoing from './components/Ongoing'
import Completed from './components/Completed'
import Header from './components/Header'
import Footer from './components/Footer'
import Pending from './components/Pending'
import { input } from './data/data'

export const DataContext = createContext();
function App() {
  const [data, setData] = useState(input)
  

  return (
    <div class="App">

      <Header />
      <DataContext.Provider value={data}>
      <InputForm />
      <Board>
        <Pending />
        <Ongoing />
        <Completed />
      </Board>
      </DataContext.Provider>
      
      <Footer />

    </div>
  )
}

export default App
