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

  '& .main_image': {
    gridColumn: '2 / 6',
    gridRow: '2 / 6',
  },

  '& .sub_image': {
    gridColumn: '4 / -1',
    gridRow: '4 / -1',
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
        <figure className="main_image">
          <img src={StoryOne} alt="" />
        </figure>
        <figure className="sub_image">
          <img src={StoryTwo} alt="" />
        </figure>
      </StoriesPictures>
      <StoriesContent>Stories Content</StoriesContent>
    </>
  )
}
