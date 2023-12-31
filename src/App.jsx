import { useState } from 'react'
import './App.css'
import TodoWrapper from './components/TodoWrapper/TodoWrapper'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet, useLocation } from 'react-router-dom';


function App() {
  const [todos, setTodos] = useState([])
  const [tags, setTags] = useState([])

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
    setTodos(prev => [...prev, newTodos])
    toast.warn(``, {autoClose: 2000});

  }


  const handleTagAdd = (e, todoId, tagInputRef) => {


    const newTag = {
      todoId: todoId,
      tag: e.target.value.trim()
    }

    if(e.key === 'Enter') {
      setTags(prev => [...prev, newTag])
      tagInputRef.current.value = "";
      
    }
  }


  const path = useLocation()

  console.log('Log: ', path)

  return (
    <>
      <ToastContainer />

      <div className={`flex gap-3 mx-auto mt-10 bg-red-400 ${path.pathname === '/' ? 'w-1/5' : 'w-2/5'}`}>
        <div className='flex-1'>
          <div className='mb-6'><input className='w-full border border-blue-900 p-3 rounded' type="text" onKeyDown={(e) => handleAddTodo(e)}/></div>

          <TodoWrapper todos={todos} handleRemoveTodo={handleRemoveTodo} handleTagAdd={handleTagAdd} tags={tags}/>
        </div>
        <div className={`flex-1 ${path.pathname === "/tags" ? 'block' : 'hidden'}`}>
          <Outlet></Outlet>
        </div>
 
        
      </div>


    </>
    
  )
}

export default App
