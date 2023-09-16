import { useState } from 'react'
import './App.css'

function App() {


  return (
    <div className='w-1/5 mx-auto mt-10'>
      <div className='mb-6'><input className='w-full border border-blue-900 p-3 rounded' type="text" /></div>

      <div>
        <ul>
          <li className='flex text-white bg-blue-900 p-3 rounded'>
            <div className='flex-1'><span>1. Lorem, ipsum dolor.</span></div>
            <div className='flex-1 flex justify-end'><button>Delete</button></div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
