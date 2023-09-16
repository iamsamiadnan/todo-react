import TodoItem from "../TodoItem/TodoItem";
import PropTypes from 'prop-types';

function TodoWrapper({todos, handleRemoveTodo}) {
  return (
    <div>
        <ul className="flex flex-col gap-2">
          {todos.map((todo, idx) => <TodoItem key={idx} todo={todo} handleRemoveTodo={handleRemoveTodo}/>)}
        </ul>
    </div>
  )
}

TodoWrapper.propTypes = {
  todos: PropTypes.array
}

export default TodoWrapper