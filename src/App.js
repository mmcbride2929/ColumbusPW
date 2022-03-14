import Home from '../src/Pages/Home'
import Work from '../src/Pages/Work'
import Quote from '../src/Pages/Quote'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Box as="main" maxW="1100px" mx="auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </>
  )
}

export default App
