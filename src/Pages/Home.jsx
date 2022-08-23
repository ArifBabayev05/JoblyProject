import Hero from '../Components/MainPage/Main/Index'
import Testimonial from '../Components/MainPage/Info/Index'
import Statistics from '../Components/MainPage/Statistics/Index'
import Image from '../Components/MainPage/Image/Index'
import React, { Component } from 'react'
// import axios from 'axios'

export default class Home extends Component {

 
  render() {

    //If User registerd Show Elements
    if(this.props.user){
      return(
        <h2>Hi {this.props.user.first_name} {this.props.user.last_name}</h2>
      )
    }
    return (
      <div>
         <Hero/>
      <Testimonial/>
      <Statistics/>
      <Image/>
      </div>
    )
  }
}
