// Allcomponents.js

import React from 'react';
import './App.css';

 const Header = ({ title }) => {
  return (
    <>
      <h1 className='h1'>{title}</h1>
    </>
  );
};

 const Footer = ({ title }) => {
  return (
    <>
      <h4 className='footer'>{title}</h4>
    </>
  );
};

 const MainContent = ({ title }) => {
  return (
    <>
      <h3 className='content'>{title}</h3>
    </>
  );
};

const Sidenav = ({ title }) => {
  return (
    <>
      <h3 className='sidenav'>{title}</h3>
    </>
  );
};

const Allcomponents = () => {
  return (
    <div className='container'>
      <Header title="Header" />
      <div className='content-container'>
        <Sidenav title="Sidenav" />
        <MainContent title="MainContent" />
      </div>
      <Footer title="Footer" />
    </div>
  );
};

export default Allcomponents;