import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {RoutesApp} from "./routes/RoutesApp";


export const App = () => {
  return (
    <div className="App">
            <Header/>
            <RoutesApp/>
    </div>
  );
}
