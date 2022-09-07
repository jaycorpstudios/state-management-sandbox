import { Box, Radio, Text } from '@chakra-ui/react'
import { FC } from 'react'

export const TodoItem: FC<TodoItemProps> = ({
  isComplete,
  text,
  bgHover,
  onClick,
}) => (
  <Box
    as='article'
    display='grid'
    gridTemplateColumns='min-content 1fr'
    gridGap={4}
    p={8}
    borderRadius={10}
    _hover={{ bg: bgHover }}
    onClick={onClick}
  >
    <Radio isChecked={isComplete} />
    <Text>{text}</Text>
  </Box>
)
