import React from 'react'
import Header from '../../components/header'

const Home = () => {
  return (
    <div>
      <Header />
      <div>This is Wcm</div>
      <button onClick={() => {alert(1)}}>Click</button>
    </div>
  )
}

export default Home
