import React, { PropTypes } from 'react'
import './Avatar.scss'

export const Avatar = ({ src }) => (
  <div className='avatar'>
    <img className='avatar__image' src={src} />
  </div>
)

Avatar.propTypes = {
  src: PropTypes.string.isRequired
}

export default Avatar
