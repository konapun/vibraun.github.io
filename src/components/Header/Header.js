import React from 'react'
import { IndexLink, Link } from 'react-router'
import Avatar from '../Avatar'
import './Header.scss'

export const Header = () => (
  <div className='header'>
    <ul className='header__links header__links--left'>
      <li>
        <IndexLink to='/' activeClassName='route--active'>
          Home
        </IndexLink>
      </li>
      <li>
        <Link to='/professional' activeClassName='route--active'>
          Professional
        </Link>
      </li>
      <li>
        <Link to='/personal' activeClassName='route--active'>
          Personal
        </Link>
      </li>
    </ul>

    <ul className='header__links header__links--center'>
      <li>
        <Link to='/' activeClassName='route--active'>
          <Avatar src='img/avatar.jpg' />
        </Link>
      </li>
    </ul>

    <ul className='header__links header__links--right'>
      <li>
        <Link to='/contact' activeClassName='route--active'>
          Contact me
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
