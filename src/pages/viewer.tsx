import React from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import { Parallax } from 'react-parallax'

import Footer from '../components/Footer'
import Section from '../components/Section'
import { Breakpoints } from '../theme'
import Typography from '../components/Typography'
import Navbar from '../components/Navbar'
import Content from '../components/Content'

const Viewer = () => {
  const width = useWindowWidth()
  return (
    <>
      <Navbar />
      <Parallax
        bgImage="/viewer-hero.svg"
        bgImageStyle={{ maxWidth: `${width > Breakpoints.mobile ? '1000' : '500'}px`, top: `${width > Breakpoints.mobile ? '0.7' : '-20'}%` }}
        strength={width > Breakpoints.mobile ? 300 : 200}
        style={{ backgroundColor: '#dccbcb' }}
      >
        <Section
          background="none"
          color="white"
          padding={`${width > Breakpoints.tablet ? '20rem' : '41vh'} 0px`}
        >
          <Content textAlign="center">
            <Typography format="ginormous">Viewer</Typography>
          </Content>
        </Section>
      </Parallax>
      <Footer />
    </>
  )
}

export default Viewer
