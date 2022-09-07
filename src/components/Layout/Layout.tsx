import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Header } from '@components/Header'
import { FC } from 'react'

const Layout: FC<LayoutProps> = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const headerBg = useColorModeValue('white', 'gray.900')
  const bg = useColorModeValue('gray.100', 'gray.800')
  return (
    <Box as='main' backgroundColor={bg} minH='100vh'>
      <Header
        bgColor={headerBg}
        toggleColorMode={toggleColorMode}
        colorMode={colorMode}
      />
      {children}
    </Box>
  )
}

export default Layout
