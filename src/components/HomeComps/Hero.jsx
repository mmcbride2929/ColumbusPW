import heroImg from '../../img/hero.jpg'

import {
  chakra,
  Box,
  useColorModeValue,
  Icon,
  Image,
  Link,
} from '@chakra-ui/react'

const Hero = () => {
  const bg = useColorModeValue('#1e6fc7', 'gray.800')
  const text = useColorModeValue('whitesmoke', 'white')
  const border = useColorModeValue('1px solid white', '1px solid grey')

  return (
    <Box bg={useColorModeValue('whitesmoke', 'gray.600')}>
      {' '}
      <Box
        pos="relative"
        overflow="hidden"
        bg={{ base: 'white', lg: bg }}
        shadow="xl"
      >
        <Box maxW="7xl" mx="auto">
          <Box
            pos="relative"
            pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
            maxW={{ lg: '2xl' }}
            w={{ lg: 'full' }}
            zIndex={1}
            bg={bg}
            border="solid 1px transparent"
          >
            <Icon
              display={{ base: 'none', lg: 'block' }}
              position="absolute"
              right={0}
              top={0}
              bottom={0}
              h="full"
              w={48}
              color={bg}
              transform="translateX(50%)"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </Icon>
            <Box
              mx="auto"
              maxW={{ base: '7xl' }}
              px={{ base: 4, sm: 6, lg: 8 }}
              mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
            >
              <Box
                w="full"
                textAlign={{ sm: 'center', lg: 'left' }}
                justifyContent="center"
                alignItems="center"
              >
                <chakra.h1
                  fontSize={{ base: '25px', sm: '35px', md: '55px' }}
                  letterSpacing="tight"
                  lineHeight="short"
                  fontWeight="extrabold"
                  color={text}
                >
                  <chakra.span
                    display={{ base: 'block', xl: 'inline' }}
                    textAlign={{ base: 'center', lg: 'left' }}
                  >
                    Columbus Power-Wash
                  </chakra.span>
                </chakra.h1>
                <chakra.p
                  mt={{ base: 3, sm: 5, md: 5 }}
                  fontSize={{ sm: 'lg', md: 'xl' }}
                  maxW={{ sm: 'xl' }}
                  mx={{ sm: 'auto', lg: 0 }}
                  textAlign={{ base: 'center', sm: 'left' }}
                  color={text}
                >
                  If you need something cleaned CPW will take care of it! We
                  have been rated a top 5 power washing company in Columbus for
                  the last five years. We've got you covered!
                </chakra.p>
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
                    border="solid transparent"
                    fontWeight="900"
                    fontSize={{ base: '0.9rem', md: '1rem' }}
                    rounded="md"
                    color={useColorModeValue('#1e6fc7', 'black')}
                    bg={text}
                    shadow="lg"
                    _hover={{
                      bg: '#1e6fc7',
                      color: useColorModeValue('whitesmoke', 'whitesmoke'),
                      cursor: 'pointer',
                      border: '1px solid whitesmoke',
                    }}
                  >
                    Our Work
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          position={{ lg: 'absolute' }}
          top={{ lg: 0 }}
          bottom={{ lg: 0 }}
          right={{ lg: 0 }}
          w={{ lg: '50%' }}
          border="solid 1px transparent"
        >
          <Image
            h={[56, 72, 96, 'full']}
            w="full"
            fit="cover"
            src={heroImg}
            alt=""
            loading="lazy"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
