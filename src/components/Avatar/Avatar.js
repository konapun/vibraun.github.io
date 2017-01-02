import React from 'react'
import './Avatar.scss'

export const Avatar = ({ src }) => (
  <div className='avatar'>
    <img className='avatar__image' src={src} />
  </div>
)

Avatar.propTypes = {
  src: React.PropTypes.element.isRequired
}

export default Avatar
