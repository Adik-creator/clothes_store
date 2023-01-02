import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {NotFound} from "./pages/NotFound";
import {Home} from "./pages/Home";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="singUp" element={<Register/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
