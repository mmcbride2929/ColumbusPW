import { Box } from '@chakra-ui/react'
import BeforeAfter from '../components/HomeComps/BeforeAfter'
import Features from '../components/HomeComps/Features'
import Hero from '../components/HomeComps/Hero'
import Testimonials from '../components/HomeComps/Testimonials'

const Home = () => {
  return (
    <Box as="body" maxW={'1100px'}>
      <Hero />
      <Features />
      <BeforeAfter />
      <Testimonials />
    </Box>
  )
}

export default Home
