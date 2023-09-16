import TodoItem from "../TodoItem/TodoItem";

export default function TodoWrapper() {
  return (
    <div>
        <ul className="flex flex-col gap-2">
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </ul>
    </div>
  )
}
