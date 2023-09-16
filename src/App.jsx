import { useState } from 'react'
import './App.css'
import TodoWrapper from './components/TodoWrapper/TodoWrapper'

function App() {


  return (
    <div className='w-1/5 mx-auto mt-10'>
      <div className='mb-6'><input className='w-full border border-blue-900 p-3 rounded' type="text" /></div>

      <TodoWrapper />
    </div>
  )
}

export default App
