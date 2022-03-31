import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { LikeCounter } from './LikeCounter.jsx';
import { UserTable } from './UserTable.jsx';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const App = () => {
 
  

  return (
    <div>
      {/* <h1>Welcome to Meteor!</h1> */}

      <UserTable/>
      
      {/* <Hello/>
      <Info/> */}
      {/* <LikeCounter/> */}
  
    
    </div>
  );
}
