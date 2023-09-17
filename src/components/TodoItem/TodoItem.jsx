import PropTypes from 'prop-types';
import { Checkbox } from 'tiny-ui';
import { FaPlusSquare } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';

function TodoItem({todo, handleRemoveTodo}) {
  const {id, text} = todo
  const [tagInput, setTagInput] = useState(false)
  const [tags, setTags] = useState([])
  const tagInputRef = useRef(null);
  
  useEffect(() => {
    tagInputRef.current.focus()
  }, [tagInput])

  return (
    <li className=' bg-blue-900 p-3 rounded'>
            <div className='flex text-white'>
              <div className='flex-1'> <Checkbox>{text}</Checkbox></div>
              <div className='flex-1 flex justify-end'><button onClick={() => handleRemoveTodo(id)}>Delete</button></div>
            </div>
            <div className='flex items-center gap-1'>
              
              

              <input  type="text" className='text-[12px] w-12 rounded-sm' hidden={!tagInput} ref={tagInputRef} />
             
              <FaPlusSquare className='hover:cursor-pointer text-white' onClick={() => setTagInput(!tagInput)}/>
            
              
            </div>
       
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
