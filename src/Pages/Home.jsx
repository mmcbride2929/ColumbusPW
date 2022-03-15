import { Box } from '@chakra-ui/react'
import BeforeAfter from '../components/HomeComps/BeforeAfter'
import Features from '../components/HomeComps/Features'
import Hero from '../components/HomeComps/Hero'
import Testimonials from '../components/HomeComps/Testimonials'

const Home = () => {
  return (
    <Box as="div" maxW={'1100px'} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}>
      <Hero />
      <Features />
      <BeforeAfter />
      <Testimonials />
    </Box>
  )
}

export default Home
