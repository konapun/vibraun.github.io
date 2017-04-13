import React from 'react'
import Header from '../../components/Header'
import Timeline from '../../components/Timeline'
import './CoreLayout.scss'
import '../../styles/core.scss'

const avatar = 'img/avatar.png'
const leftLinks = [
  {
    name: 'Professional',
    route: '/professional'
  },
  {
    name: 'Personal',
    route: '/personal'
  }
]
const rightLinks = [
  {
    name: 'Contact Me',
    route: '/contact'
  }
]

export const CoreLayout = ({ children }) => (
  <div className='core-layout'>
    <Header avatar={avatar} leftLinks={leftLinks} rightLinks={rightLinks}>
      <Timeline />
    </Header>

    <div className='core-layout__viewport'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
