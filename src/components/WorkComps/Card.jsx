import React from 'react'
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'

const Card = ({ job }) => {
  const { img, title } = job
  return (
    <Flex alignItems="center" justifyContent="center">
      <Box
        maxW="412px"
        h={{ base: 'full', md: 'full' }}
        bg={useColorModeValue('#1e6fc7', 'gray.800')}
        shadow="lg"
        overflow="hidden"
        mx={3}
        my={{ base: 3, md: 0 }}
      >
        <Image
          maxW="412px"
          h={{ base: '200px', sm: '275px', md: '250px' }}
          fit="cover"
          src={img}
          alt="avatar"
        />

        <Box p={2} textAlign="center">
          <chakra.span
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight={'bold'}
            color={useColorModeValue('white', 'black')}
          >
            {title}
          </chakra.span>
        </Box>
      </Box>
    </Flex>
  )
}

export default Card
