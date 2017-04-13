import React, { PropTypes } from 'react'
import './Navigation.scss'
import { IndexLink, Link } from 'react-router'
import Avatar from '../Avatar'

const renderLink = link => {
  return (
    <li key={link.name} className='navigation__list-item'>
      <Link to={link.route} className='navigation__link' activeClassName='navigation__link--active'>
        {link.name}
      </Link>
    </li>
  )
}

const renderLinks = links => {
  return links.map(renderLink)
}

export const Navigation = ({ leftLinks, rightLinks, avatar }) => (
  <nav className='navigation'>
    <ul className='navigation__link-list'>
      <li className='navigation__list-item'>
        <IndexLink to='/' className='navigation__link' activeClassName='navigation__link--active'>
          Home
        </IndexLink>
      </li>

      {renderLinks(leftLinks)}
    </ul>

    <ul className='navigation__link-list'>
      <li className='navigation__list-item'>
        <Link to='/' className='navigation__link' activeClassName='navigation__link--active'>
          <Avatar src={avatar} />
        </Link>
      </li>
    </ul>

    <ul className='navigation__link-list'>
      {renderLinks(rightLinks)}
    </ul>
  </nav>
)

const linkShapeProptype = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
  })
)
Navigation.propTypes = {
  leftLinks: linkShapeProptype,
  rightLinks: linkShapeProptype,
  avatar: PropTypes.string
}

export default Navigation
