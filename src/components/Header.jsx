import logo from '../img/logo.png'

import { useNavigate } from 'react-router-dom'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Image,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'

const Header = () => {
  // navigate with react-router
  const navigate = useNavigate()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  const text = useColorModeValue('#1e6fc7', 'white')

  return (
    <>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        px={4}
        maxWidth={'1100px'}
        mx={'auto'}
      >
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={['center', 'center', 'space-between']}
        >
          <IconButton
            bg={useColorModeValue('gray.200')}
            border="1px"
            borderColor="gray.400"
            pos={'absolute'}
            top={'3'}
            left={'3'}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image
                src={logo}
                w={['150px', '175px', '225px']}
                alt="logo"
                _hover={{
                  cursor: 'pointer',
                }}
                onClick={() => navigate('/')}
              />
            </Box>
          </HStack>
          <Flex alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={16}
              display={{ base: 'none', md: 'flex' }}
              color={colorMode === 'light' ? '#1e6fc7' : 'white'}
            >
              <Link
                fontWeight={'bold'}
                fontSize={'1.1rem'}
                _hover={{
                  underline: 'none',
                }}
                onClick={() => navigate('/')}
              >
                Home
              </Link>
              <Link
                fontWeight={'bold'}
                fontSize={'1.1rem'}
                _hover={{
                  underline: 'none',
                }}
                onClick={() => navigate('/work')}
              >
                Work
              </Link>
              <Link
                fontWeight={'bold'}
                _hover={{
                  underline: 'none',
                }}
                fontSize={'1.1rem'}
                onClick={() => navigate('/quote')}
              >
                Quote
              </Link>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Link
                _hover={{
                  underline: 'none',
                }}
                onClick={() => navigate('/')}
              >
                Home
              </Link>
              <Link
                _hover={{
                  underline: 'none',
                }}
                onClick={() => navigate('/work')}
              >
                Work
              </Link>
              <Link
                _hover={{
                  underline: 'none',
                }}
                onClick={() => navigate('/quote')}
              >
                Quote
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export default Header
