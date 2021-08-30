import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

import { Breakpoints, widthLessThan } from '../theme'

const useStyles = createUseStyles( {
  tile: {
    margin: '9rem 0',
    display: 'flex',
    borderRadius: '0.75rem',
    gap: '1.5rem',
    [ widthLessThan( Breakpoints.tablet ) ]: {
      margin: '4.5rem 0',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    '& img': {
      width: '100%',
      maxWidth: '600px',
      borderRadius: '0.75rem',
      [ widthLessThan( Breakpoints.tablet ) ]: {
        order: -1,
      },
    },
  },
  text: {
    maxWidth: '400px',
    alignSelf: 'center',
  },
} )

type MediaTileProps = {
  children: ReactNode,
  order: number,
  media: string,
  alt: string,
}

const MediaTile = ( { children, ...props }: MediaTileProps ) => {
  const classes = useStyles()
  return (
    <div className={classes.tile}>
      <div className={classes.text} style={{ order: props.order }}>
        {children}
      </div>
      <img src={props.media} alt={props.alt} />
    </div>
  )
}

export default MediaTile
