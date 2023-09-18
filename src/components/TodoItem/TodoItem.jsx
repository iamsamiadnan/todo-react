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

  const handleTagAdd = (e) => {
    const newTag = e.target.value.trim();

    if(e.key === 'Enter') {
      setTags(prev => [...prev, newTag])
      
      setTagInput(!tagInput)

      tagInputRef.current.value = "";
    }
  }

  console.log(tags)

  return (
    <li className=' bg-blue-900 p-3 rounded'>
            <div className='flex text-white'>
              <div className='flex-1 text-white'> <Checkbox>{text}</Checkbox></div>
              <div className='flex justify-end'><button onClick={() => handleRemoveTodo(id)}>Delete</button></div>
            </div>
            <div className='flex items-center gap-1'>
              
              
              <ul className={`flex gap-1 text-white ${tags.length > 0 ? 'block' : 'hidden'}`}>
                {
                  tags.map((tag, idx) => <li key="idx" className='text-[12px]'>#{tag}</li>)
                }
              </ul>
              <input  type="text" className='text-[12px] w-12 rounded-sm' hidden={!tagInput} ref={tagInputRef} onKeyDown={(e) => handleTagAdd(e)} />
              
              <FaPlusSquare className='hover:cursor-pointer text-white' onClick={() => setTagInput(!tagInput)}/>
            
              
            </div>
       
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
