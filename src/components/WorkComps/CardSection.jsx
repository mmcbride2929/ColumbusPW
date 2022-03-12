import Card from './Card'

import { Box, useColorModeValue } from '@chakra-ui/react'

const CardSection = ({ jobs }) => {
  const { job1, job2, job3, job4 } = jobs
  return (
    <Box bg={'whitesmoke'} p={{ base: 2, md: 12 }}>
      <Box as="card-container">
        <Box
          mx={'auto'}
          py={{ base: 0, md: 4 }}
          maxW={'850px'}
          display={'flex'}
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={'space-around'}
        >
          <Card job={job1} />
          <Card job={job2} />
        </Box>

        <Box
          mx={'auto'}
          py={{ base: 0, md: 4 }}
          maxW={'850px'}
          display={'flex'}
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={'space-around'}
        >
          <Card job={job3} />
          <Card job={job4} />
        </Box>
      </Box>
    </Box>
  )
}

export default CardSection
