import { Box, Text, Input, useColorModeValue } from '@chakra-ui/react'

export const TodoContainer = ({ title, TodoList, TodoAdd }) => {
  const bgColor = useColorModeValue('white', 'gray.900')
  return (
    <Box
      width='100%'
      padding={6}
      maxWidth='lg'
      backgroundColor={bgColor}
      borderRadius={6}
    >
      <Box>
        <Text
          fontSize='4xl'
          textAlign='center'
          fontWeight='bold'
          color='orange.500'
        >
          {title}
        </Text>
        {TodoAdd}
      </Box>
      {TodoList}
    </Box>
  )
}
