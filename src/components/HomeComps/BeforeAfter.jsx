import heroBefore from '../../img/herobefore.jpg'
import heroAfter from '../../img/heroafter.jpg'

import {
  Box,
  chakra,
  Flex,
  Image,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'

const BeforeAfter = () => {
  const bg = useColorModeValue('#1e6fc7', 'gray.800')
  const text = useColorModeValue('whitesmoke', 'white')

  return (
    <Flex w="full" justifyContent="center" alignItems="center" shadow="xl">
      <Box bg={bg} px={8} py={8} mx="auto">
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          mb={{ base: 6, md: 12 }}
          spacingY={{ base: 5, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={{ base: 1, md: 4 }}
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="extrabold"
              textAlign={{ base: 'center', md: 'left' }}
              color={text}
              letterSpacing={'1px'}
              lineHeight={{ md: 'shorter' }}
              textShadow="2px 0 currentcolor"
            >
              Does your yard look something like this?
            </chakra.h2>
            <chakra.p
              mb={{ base: 0, md: 5 }}
              textAlign={{ base: 'center', sm: 'left' }}
              color={text}
              fontSize={{ md: 'lg' }}
            >
              At CPW we run into projects like this all the time. Before you
              remodel the yard consider a deep clean. You'll save yourself a lot
              of time and money. Let us come out and handle the hard work.
            </chakra.p>
          </Box>
          <Image w="full" h="full" src={heroBefore}></Image>
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          spacingY={{ base: 5, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: 'none', md: 2 }}>
            <chakra.h2
              mb={{ base: 1, md: 4 }}
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="extrabold"
              textAlign={{ base: 'center', md: 'left' }}
              color={text}
              lineHeight={{ md: 'shorter' }}
            >
              We're here to help.
            </chakra.h2>
            <chakra.p
              mb={{ base: 0, md: 5 }}
              textAlign={{ base: 'center', sm: 'left' }}
              color={text}
              fontSize={{ md: 'lg' }}
            >
              Our services include driveways, brick surfaces, outdoor furniture,
              and much more! No need to replace your brick or furniture. A good
              cleaning will do.
            </chakra.p>
          </Box>
          <Image w="full" h="full" src={heroAfter}></Image>
        </SimpleGrid>
      </Box>
    </Flex>
  )
}

export default BeforeAfter
