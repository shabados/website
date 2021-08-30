import React from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import { Parallax } from 'react-parallax'

import Footer from '../components/Footer'
import Section from '../components/Section'
import { Breakpoints } from '../theme'
import Typography from '../components/Typography'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import MediaTile from '../components/MediaTile'

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
      <Section padding={`${width > Breakpoints.tablet ? '3.5rem' : '2rem'} 0px`}>
        <Content textAlign="center">
          <Typography format="title">Discover the historical Sikh philosophy in a new way</Typography>
        </Content>
        <Content>
          <MediaTile
            order={0}
            media="/viewer-scroll.svg"
            alt="Scroll through the Viewer in a traditional format"
          >
            <b>
              Shabad OS Viewer displays bani in long form
              as they were originally published in print format.
            </b>
            {' '}
            Read bani ang by ang, pannaa by pannaa, and vaar by vaar.
            Access all the sources in the Shabad OS Database
            including Sri Guru Granth Sahib ji, Sri Dasam Granth,
            Bhai Gurdaas ji’s Vaaran, and Bhai Nand Laal ji’s Ghazals.
          </MediaTile>
          <MediaTile
            order={1}
            media="/viewer-translate.svg"
            alt="Read Google translations of Punjabi veechaar"
          >
            <b>Learn more by clicking on any line.</b>
            {' '}
            The Viewer has extra information for each line,
            so you can understand bani better.
            With Google translating all punjabi passages
            for you automatically into English. It’s a blend
            of original information with new inspiration.
          </MediaTile>
          <MediaTile
            order={0}
            media="/viewer-update.svg"
            alt="Stay tuned for new updates"
          >
            <b>With more features on the way.</b>
            {' '}
            Shabad OS Viewer is a new project for us.
            We hope to create an online experience that more
            people can use intuitively for paath readings, khoj sessions,
            and bhed proofreadings.
          </MediaTile>
        </Content>
      </Section>
      <Footer />
    </>
  )
}

export default Viewer
