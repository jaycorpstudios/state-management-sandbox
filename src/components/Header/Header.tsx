import React, { FC } from 'react'
import { Box, Text, Button, type ColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const Header: FC<HeaderProps> = ({
  toggleColorMode,
  colorMode,
  bgColor,
}) => (
  <Box
    as='header'
    display='flex'
    alignItems='center'
    justifyContent='space-between'
    p={4}
    borderBottomWidth={1}
    borderColor='orange.500'
    bg={bgColor}
  >
    <Text>State Management Sandbox</Text>
    <Button onClick={toggleColorMode}>
      {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  </Box>
)
