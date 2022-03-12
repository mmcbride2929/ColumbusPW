import {
  Box,
  Text,
  SimpleGrid,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'

const ResidentialFeatures = () => {
  return (
    <Box bg={useColorModeValue('#1e6fc7', 'white')}>
      <Text
        fontSize={{ base: '1.5rem', lg: '2rem' }}
        color={useColorModeValue('white', 'yellow.300')}
        fontWeight={'700'}
        textAlign={'center'}
        letterSpacing={'1px'}
        textTransform={'uppercase'}
        mb={4}
        p={4}
      >
        Residential Services
      </Text>

      <SimpleGrid
        columns={{ base: 1, sm: 2 }}
        spacing={{ base: 2, md: 10 }}
        pb={6}
        color={useColorModeValue('white', 'white')}
        fontWeight={'400'}
        textAlign={'center'}
        fontSize={'1.3rem'}
      >
        <List spacing={2} w={'200px'} mx={'auto'} textAlign={'left'}>
          <ListItem>Brick Restoration</ListItem>
          <ListItem>Cement Restoration</ListItem>{' '}
          <ListItem>Fence Restoration</ListItem>
        </List>
        <List spacing={2} w={'200px'} mx={'auto'} textAlign={'left'}>
          <ListItem>Furniture Restoration</ListItem>
          <ListItem>Siding Softwash</ListItem>
          <ListItem>Rust Stain Removal</ListItem>
        </List>
      </SimpleGrid>
    </Box>
  )
}

export default ResidentialFeatures
