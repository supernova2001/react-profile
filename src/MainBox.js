import './MainBox.css';
import React, { Component,useState,useContext} from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaBeer, FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import PersonIcon from "@material-ui/icons/Person";
import DeleteIcon from "@material-ui/icons/Delete";
import DarkModeToggle from "react-dark-mode-toggle";
import { DarkThemeContext } from './DarkThemeContext';

function MainBox(){
  const { turnOn, setTurnOn, mainColor } = useContext(DarkThemeContext);
    return (
      <>
      <div>
      <div class="toggle">
      <DarkModeToggle onChange={setTurnOn} checked={turnOn} size={60}/>
      </div>
      <div class="social-icons" style={{ color: mainColor.txt }}>
        <div class="icons">
      <h4 class="instagram"><Tooltip title="Instagram"><a href="https://www.instagram.com/janakiram__sharmaa/"><FaInstagram /></a></Tooltip></h4>
       <h4 class="facebook"><Tooltip title="Linkedin"><a href="https://www.linkedin.com/in/janakiram-sharma-4610a2194/"><FaLinkedin /></a></Tooltip></h4>
       <h4 class="twitter"><Tooltip title="Twitter"><a href="https://twitter.com/breadbutterrr"><FaTwitter /></a></Tooltip></h4>      
        <h4 class="github"><Tooltip title="Github"><a href="https://github.com/supernova2001"><FaGithub /></a></Tooltip></h4>
        <h4 class="mail"><Tooltip title="Email"><a href="#"><FaEnvelope /></a></Tooltip></h4>
        </div>
      </div>
      <div class="introduction" style={{ color: mainColor.txt }}>
        <div class="my-text">
        <h3 class="heading"> Hey There!</h3>
        <p class="self-intro">This is Janakiram Sharma, A Software Engineer based out of Hyderabad, India. <br></br>I love trying out new things and learn something new everyday.I am a Tech buff. <br></br> I spend most of my free time travelling and clicking photos.</p>
        </div>
      </div>
      <div class="project-links" style={{ color: mainColor.txt }}>
        <div class="projects">
          <p class="project-title">Projects</p>
          <p id="project-1"><a href="#">Medicine Recommendation System</a></p>
          <p id="project-2"><a href="#">Credit Card Fraud Detection System</a></p>
          <p id="project-3"><a href="#">Diagnostic Test booking online</a></p>
          <p id="project-4"><a href="#">Customer Segmentation model</a></p>
        </div>
      </div>
      <div
      className="App"
      style={{
        backgroundColor: mainColor.bg,
        //color: mainColor.txt,
        height: "100vh"
      }}
    ></div>
    </div>
      </>
      );
}

export default MainBox;