import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( {
  content: ( props: ContentProps ) => ( {
    maxWidth: 1024,
    padding: [ 0, 22 ],
    margin: [ 0, 'auto' ],
    textAlign: props.textAlign || 'left',
  } ),
} )

type ContentProps = {
  children?: ReactNode,
  maxWidth?: number,
  padding?: number[],
  margin?: number[] | string[],
  textAlign?: string,
}

const Content = ( { children, ...props }: ContentProps ) => {
  const classes = useStyles( { ...props } )
  return (
    <div className={classes.content}>
      {children}
    </div>
  )
}

export default Content
