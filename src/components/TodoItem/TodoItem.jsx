import PropTypes from 'prop-types';

function TodoItem({todo, handleRemoveTodo}) {
  const {id, text} = todo

  return (
    <li className='flex text-white bg-blue-900 p-3 rounded'>
            <div className='flex-1'><input type="checkbox" /> <span>{text}</span></div>
            <div className='flex-1 flex justify-end'><button onClick={() => handleRemoveTodo(id)}>Delete</button></div>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
