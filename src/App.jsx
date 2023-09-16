import { useState } from 'react'
import './App.css'
import TodoWrapper from './components/TodoWrapper/TodoWrapper'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [todos, setTodos] = useState([])


  const handleAddTodo = (e) => {
   
    if (e.key === 'Enter') {
      const todo = {
        id: todos.length + 1,
        text: e.target.value
      }
      setTodos(prev => [...prev, todo])
      toast.success(``, {autoClose: 2000});
    }
  }

  const handleRemoveTodo = (todoId) => {
    const foundTodo = todos.find(todo => todo.id === todoId)
    const newTodos = todos.filter(todo => todo.id !== foundTodo.id)
    setTodos(prev => [...newTodos])
    toast.warn(``, {autoClose: 2000});

  }

  // console.log('Log: ', todos)

  return (
    <>
      <ToastContainer />

      <div className='w-1/5 mx-auto mt-10'>
        <div className='mb-6'><input className='w-full border border-blue-900 p-3 rounded' type="text" onKeyDown={(e) => handleAddTodo(e)}/></div>

        <TodoWrapper todos={todos} handleRemoveTodo={handleRemoveTodo}/>
      </div>

    </>
    
  )
}

export default App
