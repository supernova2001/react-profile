import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './NavigationBar';
import MainBox from './MainBox';
import Body from './Body';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';
import { DartThemeProvider } from "./DarkThemeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DartThemeProvider>
    <MainBox />
    </DartThemeProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
