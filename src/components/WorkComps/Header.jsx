import React from 'react'
import {
  chakra,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'

const Header = () => {
  const bg = useColorModeValue('#1e6fc7', 'gray.800')
  const text = useColorModeValue('whitesmoke', 'white')
  const border = useColorModeValue('1px solid white', '1px solid grey')

  return (
    <Flex bg={bg} w="full" py={8} alignItems="center" justifyContent="center">
      <Flex justify="center" w="full">
        <Box
          w={{ base: 'full', md: '75%' }}
          px={4}
          py={20}
          textAlign={'center'}
        >
          <chakra.span
            fontSize={{ base: '1.3rem', sm: '1.5rem', md: '4xl' }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color={text}
            mb={6}
          >
            <chakra.span display="block">
              Residential or Commercial..
            </chakra.span>
            <chakra.span display="block" color={text}>
              Our work speaks for itself.
            </chakra.span>
          </chakra.span>
          <Stack
            justifyContent={'center'}
            direction={'row'}
            spacing={6}
            mt={4}
            alignItems={{ base: 'center' }}
          >
            <Box
              display="inline-flex"
              rounded="md"
              shadow="md"
              h={{ base: '45px', md: '55px' }}
              w={{ base: '85px', md: '125px' }}
            >
              <Link
                w={{ base: '85px', md: '125px' }}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={{ base: '6px', md: '18px' }}
                border="solid transparent"
                fontWeight="bold"
                fontSize={{ base: '0.8rem', md: '1rem' }}
                rounded="md"
                color={useColorModeValue('#1e6fc7', 'black')}
                bg={'white'}
                _hover={{
                  bg: useColorModeValue('#1e6fc7', 'gray.800'),
                  color: 'white',
                  border: border,
                }}
              >
                Residential
              </Link>
            </Box>
            <Box
              ml={3}
              display="inline-flex"
              rounded="md"
              shadow="md"
              h={{ base: '45px', md: '55px' }}
              w={{ base: '85px', md: '125px' }}
            >
              <Link
                w={{ base: '85px', md: '125px' }}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={{ base: '6px', md: '18px' }}
                border="solid transparent"
                fontWeight="bold"
                fontSize={{ base: '0.8rem', md: '1rem' }}
                rounded="md"
                color={useColorModeValue('#1e6fc7', 'black')}
                bg={'white'}
                _hover={{
                  bg: useColorModeValue('#1e6fc7', 'gray.800'),
                  color: 'white',
                  border: border,
                }}
              >
                Commercial
              </Link>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Header
