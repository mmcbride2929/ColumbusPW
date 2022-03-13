import darren from '../../img/Darren.jpg'
import macy from '../../img/Macy.jpg'

import {
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react'

const Testimonials = () => {
  const bg = useColorModeValue('', 'gray.700')
  const text = useColorModeValue('#1e6fc7', 'white')

  return (
    <Box pos="relative" overflow="hidden" bg={bg} shadow="xl" py={8}>
      <chakra.h1
        fontSize={{ base: '25px', sm: '35px', md: '55px' }}
        lineHeight="short"
        fontWeight="extrabold"
        color={text}
        textAlign={'center'}
      >
        <chakra.span display={{ base: 'block', xl: 'inline' }}>
          A word from our clients
        </chakra.span>
      </chakra.h1>
      <Stack
        bg={bg}
        py={{ base: 0, md: 6 }}
        px={{ base: 6, md: 12 }}
        spacing={{ base: 4, md: 8 }}
        align={'center'}
        direction={'column'}
      >
        <Box my={4} maxW={'650px'}>
          <Box textAlign={'center'} my={4}>
            <Avatar
              w={'75px'}
              h={'75px'}
              src={darren}
              alt={'Darren Reed'}
              mb={2}
            />

            <Text fontWeight={600}>Darren Reed</Text>
          </Box>
          <Text
            fontSize={{ base: '1rem', md: '1.2rem' }}
            fontWeight={'400'}
            textAlign={'center'}
            maxW={'3xl'}
          >
            "CPW took care of my driveway and my house's siding! I didn't
            realize how much dirt had built up until they did the pavement.
            After seeing the before and after we will never let it get so bad!"
          </Text>
        </Box>
        <Box my={4} maxW={'650px'}>
          <Box textAlign={'center'} my={4}>
            <Avatar
              w={'75px'}
              h={'75px'}
              src={macy}
              alt={'Macy Peters'}
              mb={2}
            />

            <Text fontWeight={600}>Macy Peters</Text>
          </Box>

          <Text
            fontSize={{ base: '1rem', md: '1.2rem' }}
            fontWeight={'400'}
            textAlign={'center'}
            maxW={'5xl'}
          >
            "Our trucks had a bunch of salt build up on them and the guys over
            at Columbus Power-Wash were able to get them looking new again. If I
            remember correctly they cleaned two other trucks for free!"
          </Text>
        </Box>
      </Stack>
    </Box>
  )
}

export default Testimonials
