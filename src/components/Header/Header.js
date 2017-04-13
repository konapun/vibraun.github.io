import React, { PropTypes } from 'react'
import './Header.scss'
import Navigation from '../Navigation'

export const Header = ({ avatar, leftLinks, rightLinks, children }) => (
  <header className='header'>
    <Navigation avatar={avatar} leftLinks={leftLinks} rightLinks={rightLinks} />

    { children }
  </header>
)

Header.propTypes = {
  avatar: PropTypes.string,
  leftLinks: PropTypes.array,
  rightLinks: PropTypes.array,
  children: PropTypes.node
}

export default Header
