import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export default function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      color={useColorModeValue('black', 'gray.200')}
      maxW={'1100px'}
      mx={'auto'}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2022 Columbus Power-Wash.</Text>
      </Container>
    </Box>
  )
}
