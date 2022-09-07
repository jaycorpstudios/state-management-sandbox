import type { NextPage } from 'next'
import { Box, Center, Text } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Center as='main' h='100vh'>
        <Box p='5' maxW='320px' borderWidth='1px'>
          <Text
            fontSize='md'
            fontWeight='semibold'
            lineHeight='short'
            textAlign='center'
          >
            Select a template to start (Soon)
          </Text>
        </Box>
      </Center>
    </>
  )
}

export default Home
