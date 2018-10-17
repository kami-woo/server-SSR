import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to='/'>home</Link><br />
      <Link to='/enter'>enter</Link>
    </div>
  )
}

export default Header
