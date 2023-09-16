import TodoItem from "../TodoItem/TodoItem";
import PropTypes from 'prop-types';

function TodoWrapper({todos}) {
  return (
    <div>
        <ul className="flex flex-col gap-2">
          {todos.map((todo, idx) => <TodoItem key={idx} todo={todo}/>)}
        </ul>
    </div>
  )
}

TodoWrapper.propTypes = {
  todos: PropTypes.array
}

export default TodoWrapper