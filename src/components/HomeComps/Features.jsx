import residential from '../../img/residential.jpg'
import commercial from '../../img/commercial.jpg'

import {
  chakra,
  Image,
  Box,
  Flex,
  Link,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react'

export default function C2g() {
  const Features = (props) => {
    return (
      <Flex>
        <Box textAlign={'center'}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            textAlign={'center'}
            color={useColorModeValue('black')}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue('black', 'gray.400')}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    )
  }

  return (
    <Flex justifyContent="center" alignItems="center">
      <Box
        py={8}
        bg={useColorModeValue('white', 'gray.800')}
        border={'1px solid white'}
        shadow="xl"
      >
        <Box maxW="7xl" mx="auto" px={8} textAlign="center">
          <Box textAlign={{ lg: 'center' }}>
            <chakra.p
              fontSize={{ base: '3xl', sm: '4xl' }}
              lineHeight="8"
              fontWeight="extrabold"
              color={useColorModeValue('#1e6fc7')}
            >
              What we can do for you?
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              px={6}
              fontSize="xl"
              mx={{ md: 'auto' }}
              color={useColorModeValue('black', 'white')}
            >
              We offer both residential and commercial cleaning services. From
              driveways to parking garages, we do it all! Give us a call and we
              can give you a free estimate!
            </chakra.p>
          </Box>
          <Box
            display="flex"
            rounded="md"
            shadow="md"
            h={{ base: '45px', md: '55px' }}
            w={{ base: '115px', md: '125px' }}
            mt={8}
            mx={'auto'}
          >
            <Link
              w={{ base: '115px', md: '125px' }}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={{ base: '6px', md: '18px' }}
              border={'1px solid #1e6fc7'}
              fontWeight="900"
              fontSize={{ base: '0.9rem', md: '1rem' }}
              rounded="md"
              color={useColorModeValue('white', '#1e6fc7')}
              bg={useColorModeValue(('white', '#1e6fc7'))}
              shadow="lg"
              _hover={{
                bg: useColorModeValue('whitesmoke', '#1e6fc7'),
                color: useColorModeValue('#1e6fc7', 'whitesmoke'),
                cursor: 'pointer',
                border: '1px solid whitesmoke',
              }}
            >
              Free Quote
            </Link>
          </Box>

          <Box mt={12}>
            <HStack
              spacing={{ base: 0, md: 0 }}
              display={{ md: 'grid' }}
              gridTemplateColumns={{ md: 'repeat(2,1fr)' }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Box my={{ base: 6, md: 0 }}>
                <Image
                  w="full"
                  h="full"
                  src={residential}
                  mb={{ base: 2, md: 3 }}
                ></Image>
                <chakra.p
                  fontSize={{ base: '1.4rem', md: '1.9rem' }}
                  fontWeight="bold"
                >
                  Residential Services
                </chakra.p>
                <chakra.p px={{ base: 2, md: 4 }} fontWeight="500">
                  Brick restoration, gunk removal, paint removal, driveway
                  cleaning & more!
                </chakra.p>
              </Box>
              <Box my={{ base: 6, md: 8 }}>
                <Image
                  w="full"
                  h="full"
                  src={commercial}
                  mb={{ base: 2, md: 4 }}
                ></Image>
                <chakra.p
                  fontSize={{ base: '1.4rem', md: '1.9rem' }}
                  fontWeight="bold"
                >
                  Commercial Services
                </chakra.p>
                <chakra.p px={{ base: 2, md: 4 }} fontWeight="500">
                  Automotive paint removal, industrial cleaning, marine
                  restoration, and more!
                </chakra.p>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
