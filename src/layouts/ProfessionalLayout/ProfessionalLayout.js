import React from 'react'
import Header from '../../components/Header'
import './ProfessionalLayout.scss'
import '../../styles/core.scss'

export const ProfessionalLayout = ({ children }) => (
  <div className='container text-center'>
    <Header />
    <div className='core-layout__viewport'>
      {children}
    </div>
  </div>
)

ProfessionalLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default ProfessionalLayout
