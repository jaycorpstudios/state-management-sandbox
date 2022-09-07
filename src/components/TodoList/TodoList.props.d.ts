type TodoListProps = {
  tasks: TodoItem[]
  onTaskClick?: (id: number) => void
}