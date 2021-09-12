import React from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import { createUseStyles } from 'react-jss'

import Footer from '../components/Footer'
import Section from '../components/Section'
import { Breakpoints } from '../theme'
import Typography from '../components/Typography'
import Navbar from '../components/Navbar'
import Content from '../components/Content'

const useStyles = createUseStyles( () => ( {
  quote: {
    color: '#999',
    fontStyle: 'italic',
    padding: '0.75rem 1rem',
    borderLeft: '0.25rem solid #DDD',
  },
} ) )

const Viewer = () => {
  const classes = useStyles()
  const width = useWindowWidth()
  return (
    <>
      <Navbar />
      <Section
        padding={`${width > Breakpoints.tablet ? '20rem' : '4rem'} 0px`}
      >
        <Content textAlign="center">
          <Typography format="title">
            Our mission is to learn about Shabad
            and make it universally accessible
            to every person on the planet.
          </Typography>
        </Content>
      </Section>
      <Section padding={`${width > Breakpoints.tablet ? '3.5rem' : '2rem'} 0px`}>
        <Content textAlign="center">
          <Typography format="title">Name & Mission</Typography>
        </Content>
        <Content>
          <Typography format="header">What is Shabad OS?</Typography>
          <Typography format="body">
            <div className={classes.quote}>
              ਸਬਦੁ ਭਾਖਤ ਸਸਿ ਜੋਤਿ ਅਪਾਰਾ ॥
              <br />
              ~ Guru Nanak Dev Ji - Sri Guru Granth Sahib Ji - Ang 943
              <br />
              <br />
              Giving voice to the Shabad,
              the moon of the mind is illuminated with infinity.
            </div>
          </Typography>
          <Typography format="body">
            Shabad is commonly defined as a hymn, but could its meaning be something more elusive?
            Our goal is to learn about Shabad through the various writings of the Sikh philosophy
            and then to make them more accessible for others to learn from as well.
            Hence the OS in our name – It stands for open-source.
          </Typography>
          <Typography format="body">
            The term open-source originates in a software movement to support open collaboration.
            Basically, people desired to voluntarily cooperate together to create something better.
            Similarly, we believe in an open-source Sikh philosophy. Everyone can join, there are
            no barriers to participation. The work that is completed can be handed off to
            the following generations.
          </Typography>
        </Content>
      </Section>
      <Footer />
    </>
  )
}

export default Viewer
