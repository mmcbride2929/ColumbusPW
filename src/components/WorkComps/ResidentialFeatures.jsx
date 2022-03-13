import {
  Box,
  Text,
  SimpleGrid,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'

const ResidentialFeatures = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const text = useColorModeValue('#1e6fc7', 'white')

  return (
    <Box bg={bg}>
      <Text
        fontSize={{ base: '1.5rem', lg: '2rem' }}
        color={text}
        fontWeight={'700'}
        textAlign={'center'}
        letterSpacing={'1px'}
        textTransform={'uppercase'}
        mb={{ base: 0, md: 4 }}
        p={4}
      >
        Residential Services
      </Text>

      <SimpleGrid
        columns={{ base: 1, sm: 2 }}
        spacing={{ base: 2, md: 10 }}
        pb={6}
        color={text}
        fontWeight={'400'}
        textAlign={'center'}
        fontSize={'1.3rem'}
      >
        <List
          spacing={2}
          w={'200px'}
          mx={'auto'}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <ListItem>Brick Restoration</ListItem>
          <ListItem>Cement Restoration</ListItem>{' '}
          <ListItem>Fence Restoration</ListItem>
        </List>
        <List
          spacing={2}
          w={'200px'}
          mx={'auto'}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <ListItem>Furniture Restoration</ListItem>
          <ListItem>Siding Softwash</ListItem>
          <ListItem>Rust Stain Removal</ListItem>
        </List>
      </SimpleGrid>
    </Box>
  )
}

export default ResidentialFeatures
