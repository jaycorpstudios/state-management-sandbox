import { AddIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { FC } from 'react'

export const TodoAdd: FC<TodoAddProps> = ({
  placeholder = '',
  value,
  onAdd,
  onChange,
}) => (
  <InputGroup>
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={(e) => e.key === 'Enter' && onAdd && onAdd()}
    />
    <InputRightElement onClick={onAdd} width='5rem'>
      <Button colorScheme='orange' rightIcon={<AddIcon />}>
        Add
      </Button>
    </InputRightElement>
  </InputGroup>
)
