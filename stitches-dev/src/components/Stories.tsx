import React from 'react'
import { styled } from '../styles/stitches.config'
import StoryOne from '../assets/story-1.jpeg'
import StoryTwo from '../assets/story-2.jpeg'

const StoriesPictures = styled('div', {
  background: 'papayawhip',
  padding: '$400',

  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridTemplateRows: 'repeat(6, 10vw)',

  '& figure': {
    objectFit: 'cover',
  },

  '& img': {
    width: '100%',
    height: '100%',
  },
})

const StoriesContent = styled('div', {
  background: 'pink',
  padding: '$400',
})

export default function Stories() {
  return (
    <>
      <StoriesPictures>
        <figure>
          <img className="main_image" src={StoryOne} alt="" />
          {/* <img className="sub_image" src={StoryTwo} alt="" /> */}
        </figure>
      </StoriesPictures>
      <StoriesContent>Stories Content</StoriesContent>
    </>
  )
}
