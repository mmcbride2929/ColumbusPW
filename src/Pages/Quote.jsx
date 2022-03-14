import {
  Container,
  Flex,
  chakra,
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
import emailjs from 'emailjs-com'
import { useState } from 'react'

const Quote = () => {
  const bg = useColorModeValue('whitesmoke', 'gray.800')
  const text = useColorModeValue('black', 'white')
  const border = useColorModeValue('1px solid white', '1px solid grey')

  // our input's and error's state
  const initialValues = { name: '', email: '', message: '' }
  const [formState, setFormState] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    // taking current state.. and adding new value via KVP
    setFormState({ ...formState, [name]: value })
  }

  const validateForm = (values) => {
    const errorsObject = {}

    if (!values.name) {
      errorsObject.name = '* required'
    }
    if (!values.email) {
      errorsObject.email = '* required'
    }
    if (!values.message) {
      errorsObject.message = '* required'
    }

    return errorsObject
  }

  // submit function
  const sendEmail = (e) => {
    e.preventDefault()

    // getting object that may contain errors
    const errorsCheck = validateForm(formState)

    // if there are any errors, set errors
    if (errorsCheck.name || errorsCheck.email || errorsCheck.message) {
      setFormErrors(validateForm(formState))

      // else submit form + clear
    } else {
      emailjs
        .sendForm(
          'service_jhrks7l',
          'template_4u5p8im',
          e.target,
          'kmvTtXEjl430GDVrg'
        )
        .catch((err) => console.log(err))

      //resetting form
      setFormState(initialValues)
      setSubmitted(true)
    }
  }

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
                <form onSubmit={sendEmail}>
                  <VStack spacing={5}>
                    <FormControl>
                      <FormLabel width={'100%'} textAlign={'center'}>
                        Your Name
                      </FormLabel>

                      <InputGroup position={'relative'} borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<BsPerson color="gray.800" />}
                        />
                        <Input
                          name="name"
                          type="text"
                          size="md"
                          value={formState.name}
                          onChange={handleChange}
                        />
                        <chakra.p
                          color={'red'}
                          position={'absolute'}
                          top={{ base: '10px', md: '10px' }}
                          right={{ base: '10px', md: '15px' }}
                        >
                          {formState.name === '' ? formErrors.name : ''}
                        </chakra.p>
                      </InputGroup>
                    </FormControl>

                    <FormControl>
                      <FormLabel width={'100%'} textAlign={'center'}>
                        Email
                      </FormLabel>
                      <InputGroup position={'relative'} borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<MdOutlineEmail color="gray.800" />}
                        />
                        <Input
                          name="email"
                          type="email"
                          size="md"
                          value={formState.email}
                          onChange={handleChange}
                        />
                        <chakra.p
                          color={'red'}
                          position={'absolute'}
                          top={{ base: '10px', md: '10px' }}
                          right={{ base: '10px', md: '15px' }}
                        >
                          {formState.email === '' ? formErrors.email : ''}
                        </chakra.p>
                      </InputGroup>
                    </FormControl>

                    <FormControl>
                      <FormLabel width={'100%'} textAlign={'center'}>
                        Service Type
                      </FormLabel>

                      <Select
                        name="service"
                        borderColor="#E0E1E7"
                        variant="outline"
                      >
                        <option value="residential" defaultValue>
                          Residential
                        </option>
                        <option value="Commercial">Commercial</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel width={'100%'} textAlign={'center'}>
                        Message
                      </FormLabel>

                      <Textarea
                        onChange={handleChange}
                        name="message"
                        h={'175px'}
                        borderColor="gray.300"
                        value={formState.message}
                        _hover={{
                          borderRadius: 'gray.300',
                        }}
                        placeholder="message"
                      />
                      <chakra.p
                        color={'red'}
                        position={'absolute'}
                        top={{ base: '40px', md: '9' }}
                        right={{ base: '10px', md: '3' }}
                      >
                        {formState.message === '' ? formErrors.message : ''}
                      </chakra.p>
                    </FormControl>
                    <FormControl id="name" textAlign={'center'}>
                      <Button
                        type={'submit'}
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
                      {submitted ? (
                        <chakra.p
                          color={'red'}
                          fontWeight={'500'}
                          marginTop={5}
                          textAlign={'center'}
                        >
                          Thank you! Message Recieved
                        </chakra.p>
                      ) : (
                        ''
                      )}
                    </FormControl>
                  </VStack>
                </form>
              </Box>
            </Box>
          </WrapItem>
        </Wrap>
      </Flex>
    </Container>
  )
}

export default Quote
