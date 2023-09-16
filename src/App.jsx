import { useState } from 'react'
import './App.css'
import TodoWrapper from './components/TodoWrapper/TodoWrapper'

function App() {
  const [todos, setTodos] = useState([])


  const handleAddTodo = (e) => {
   
    if (e.key === 'Enter') {
      const todo = {
        id: todos.length + 1,
        text: e.target.value
      }

      setTodos(prev => [...prev, todo])
      // console.log('Log: ', e.target.value)
    }
  }

  console.log('Log: ', todos)

  return (
    <div className='w-1/5 mx-auto mt-10'>
      <div className='mb-6'><input className='w-full border border-blue-900 p-3 rounded' type="text" onKeyDown={(e) => handleAddTodo(e)}/></div>

      <TodoWrapper todos={todos}/>
    </div>
  )
}

export default App
