import TodoItem from "../TodoItem/TodoItem";
import PropTypes from 'prop-types';

function TodoWrapper({todos, tags, handleRemoveTodo, handleTagAdd}) {
  return (
    <div>
        <ul className="flex flex-col gap-2">
          {todos.map((todo, idx) => <TodoItem key={idx} todo={todo} handleRemoveTodo={handleRemoveTodo} handleTagAdd={handleTagAdd} tags={tags}/>)}
        </ul>
    </div>
  )
}

TodoWrapper.propTypes = {
  todos: PropTypes.array,
  tags: PropTypes.array,
  handleRemoveTodo: PropTypes.func.isRequired,
  handleTagAdd: PropTypes.func.isRequired
}

export default TodoWrapper