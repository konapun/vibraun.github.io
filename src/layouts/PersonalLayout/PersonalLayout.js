import React from 'react'
import Header from '../../components/Header'
import './PersonalLayout.scss'
import '../../styles/core.scss'

export const PersonalLayout = ({ children }) => (
  <div className='container text-center'>
    <Header />
    <div className='core-layout__viewport'>
      {children}
    </div>
  </div>
)

PersonalLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default PersonalLayout
