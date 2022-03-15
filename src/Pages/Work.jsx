import img1 from '../img/gallery1.jpg'
import img2 from '../img/gallery2.jpg'
import img3 from '../img/gallery3.jpg'
import img4 from '../img/gallery4.jpg'
import img5 from '../img/gallery5.jpg'
import img6 from '../img/gallery6.jpg'
import img7 from '../img/gallery7.jpg'
import img8 from '../img/gallery8.jpg'
import ResidentialFeatures from '../components/WorkComps/ResidentialFeatures'
import Header from '../components/WorkComps/Header'
import CardSection from '../components/WorkComps/CardSection'
import CommercialFeatures from '../components/WorkComps/CommercialFeatures'

import { useState } from 'react'
import { Box } from '@chakra-ui/react'

const Work = () => {
  const [residentialJobs, setResidentialJobs] = useState({
    job1: { img: img1, title: 'Brick Restoration - Aug 2021' },
    job2: { img: img2, title: 'Vinyl Siding Softwash - Oct 2021 ' },
    job3: { img: img3, title: 'Concrete Restoration & Seal - May 2020' },
    job4: { img: img4, title: 'Fence Restoration - April 2021' },
  })

  const [commercialJobs, setCommercialJobs] = useState({
    job1: { img: img5, title: 'Entrance Clean Up - April 2021' },
    job2: { img: img6, title: 'Oil Stain Removal - September 2020' },
    job3: { img: img7, title: 'Graffiti Removal - August 2021' },
    job4: { img: img8, title: 'Tin Roof Scrub - April 2021' },
  })

  return (
    <Box boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}>
      <Header />
      <ResidentialFeatures />
      <CardSection jobs={residentialJobs} />
      <CommercialFeatures />
      <CardSection jobs={commercialJobs} />
    </Box>
  )
}

export default Work
