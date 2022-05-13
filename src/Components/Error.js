import React, { Component } from 'react'
import image from './Components/wrong.jpg';
 class Error extends Component {
  render() {
    return (
      <div>
          <h1>SORRY!SOMETHING WENT WRONG</h1>
          <img src={image} alt=" wrong"/>
          </div>
    )
  }
}

export default Error;