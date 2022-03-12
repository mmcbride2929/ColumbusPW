import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Select,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'

import { MdOutlineEmail } from 'react-icons/md'

import { BsPerson } from 'react-icons/bs'

const Quote = () => {
  const bg = useColorModeValue('whitesmoke', 'gray.800')
  const text = useColorModeValue('black', 'white')
  const border = useColorModeValue('1px solid white', '1px solid grey')

  return (
    <Container bg={bg} maxW="full" centerContent overflow="hidden">
      <Flex m={{ base: 8, md: 16 }} maxW={'600px'} w={'100%'}>
        <Wrap w={'100%'}>
          <WrapItem
            border={border}
            bg={useColorModeValue('white', 'gray.700')}
            w={'100%'}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
          >
            <Box textAlign={'center'} mx={'auto'} p={6}>
              <Heading
                fontSize={{ base: 28, md: 40 }}
                color={useColorModeValue('#1e6fc7', 'white')}
              >
                Get a Free Quote
              </Heading>
              <Text mt={{ base: 1 }} color={text}>
                Fill up the form below to contact
              </Text>
            </Box>
            <Box borderRadius="lg" w={'100%'}>
              <Box m={8} color={text}>
                <VStack spacing={5}>
                  <FormControl id="name">
                    <FormLabel width={'100%'} textAlign={'center'}>
                      Your Name
                    </FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<BsPerson color="gray.800" />}
                      />
                      <Input type="text" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel width={'100%'} textAlign={'center'}>
                      Mail
                    </FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<MdOutlineEmail color="gray.800" />}
                      />
                      <Input type="text" size="md" />
                    </InputGroup>
                  </FormControl>

                  <FormControl id="name">
                    <FormLabel width={'100%'} textAlign={'center'}>
                      Service Type
                    </FormLabel>

                    <Select borderColor="#E0E1E7" variant="outline">
                      <option value="residential" selected>
                        Residential
                      </option>
                      <option value="Commercial">Commercial</option>
                    </Select>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel width={'100%'} textAlign={'center'}>
                      Message
                    </FormLabel>
                    <Textarea
                      h={'175px'}
                      borderColor="gray.300"
                      _hover={{
                        borderRadius: 'gray.300',
                      }}
                      placeholder="message
                      
                      
                      "
                    />
                  </FormControl>
                  <FormControl id="name" textAlign={'center'}>
                    <Button
                      variant="solid"
                      bg={useColorModeValue('#0D74FF', 'white')}
                      color={useColorModeValue('white', 'black')}
                      _hover={{
                        border: useColorModeValue('none', '1px solid grey'),
                        bg: useColorModeValue('', 'gray.800'),
                        color: useColorModeValue('', 'white'),
                      }}
                    >
                      Get Quote
                    </Button>
                  </FormControl>
                </VStack>
              </Box>
            </Box>
          </WrapItem>
        </Wrap>
      </Flex>
    </Container>
  )
}

export default Quote
