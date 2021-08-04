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
  background: 'bisque',
  padding: '$400',
  color: '$color-secondary',

  '& > * + *': {
    marginTop: '$200',
  },

  '& h4': {
    fontFamily: '$display',
  },

  '& h2': {
    fontFamily: '$display',
    fontStyle: 'italic',
  },
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
      <StoriesContent>
        <h4>Happy Customers</h4>
        <h2>Listen to what our Customers are saying</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui
          perferendis blanditiis rerum, fugiat magni. Temporibus maiores
          quisquam assumenda quibusdam!
        </p>
      </StoriesContent>
    </>
  )
}
