import PropTypes from 'prop-types';
import { Checkbox } from 'tiny-ui';
import { FaPlusSquare } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';


function TodoItem({todo, tags, handleRemoveTodo, handleTagAdd}) {
  const {id, text} = todo
  const [tagInput, setTagInput] = useState(false)
  
  const tagInputRef = useRef(null);

  const foundTags = tags.filter(tag => tag.todoId === id)


  console.log(foundTags)
  useEffect(() => {
    tagInputRef.current.focus()
    
    
  }, [tagInput])


  return (
    <li className=' bg-blue-900 p-3 rounded'>
            <div className='flex text-white'>
              <div className='flex-1 text-white'> <Checkbox>{text}</Checkbox></div>
              <div className='flex justify-end'><button onClick={() => handleRemoveTodo(id)}>Delete</button></div>
            </div>
            <div className='flex items-center gap-1'>
              
              
              <ul className={`flex gap-1 text-white ${foundTags.length > 0 ? 'block' : 'hidden'}`}>
              {/* <ul className={`flex gap-1 text-white`}> */}
                {
                  foundTags.map((tag, idx) => <li key={idx} className='text-[12px]'>#{tag.tag}</li>)
                  
                  
                }
              </ul>
              <input  type="text" className='text-[12px] w-12 rounded-sm' hidden={!tagInput} ref={tagInputRef} onKeyDown={(e) => handleTagAdd(e, id, tagInputRef)} />
              
              <FaPlusSquare className='hover:cursor-pointer text-white' onClick={() => setTagInput(!tagInput)}/>
            
              
            </div>
       
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired,
  handleTagAdd: PropTypes.func.isRequired
}

export default TodoItem
