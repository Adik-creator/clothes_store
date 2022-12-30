import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {Login} from "./pages/Login";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
