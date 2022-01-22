import React from 'react'
import Counter from './components/Counter'
import IMAGES from './images/react.png'
import './styles.css'

export const App = () => {
  return (
    <React.Fragment>
      <h1>Hello React application - {process.env.REACT_APP_NAME}</h1>
      <img src={IMAGES} alt="" />
      <Counter initialCounter={0} />
    </React.Fragment>
  )
}
