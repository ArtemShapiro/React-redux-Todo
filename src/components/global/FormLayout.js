import React, { PropTypes } from 'react'

const Layout = ({children}) => (
  <div className='columns h-100 form-container'>
    <div className='column is-2 is-offset-5'>
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout
