import React from 'react'
import './style.css'
import profileImage from '../../assets/images/Erin Profile.jpg';

const MainPage = () => {
  return (
    <main className = "mainContainer">
      <div className= "aboutSection">
        <img src= {profileImage} alt= "Erin Jacobsen" className="profileImage"/>
        <div className="bioText">
          <h1>About Me</h1>
          <p>
            Hi, I'm Erin and I have recently started my education in web develpoment with a Full Stack Course from EDX offered through UCF. Welcome to my portfolio!
          </p>
        </div>
      </div>
    </main>

  )
}

export default MainPage