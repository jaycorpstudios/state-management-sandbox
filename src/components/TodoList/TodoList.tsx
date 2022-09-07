import { Box, useColorModeValue } from '@chakra-ui/react'
import TodoItem from '@components/TodoItem'
import { FC } from 'react'

export const TodoList: FC<TodoListProps> = ({ tasks = [], onTaskClick }) => {
  const bgHover = useColorModeValue('gray.100', 'gray.800')
  const onClick = (id: number) =>
    !!onTaskClick ? () => onTaskClick(id) : undefined
  return (
    <Box p={4}>
      {tasks.map(({ id, text, isComplete }) => (
        <TodoItem
          key={id}
          text={text}
          isComplete={isComplete}
          bgHover={bgHover}
          onClick={onClick(id)}
        />
      ))}
    </Box>
  )
}
