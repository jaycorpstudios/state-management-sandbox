import type { NextPage } from 'next'
import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import TodoList from '@components/TodoList'
import TodoContainer from '@components/TodoContainer'
import TodoAdd from '@components/TodoAdd'
import { todosInitialState } from 'src/constants/initialStates'

const ToDoPage: NextPage = () => {
  return (
    <Box as='main' p={4}>
      <Center>
        <TodoContainer
          title='To Do App'
          TodoAdd={<TodoAdd placeholder='Implement state' />}
          TodoList={<TodoList tasks={todosInitialState} />}
        />
      </Center>
    </Box>
  )
}

export default ToDoPage
