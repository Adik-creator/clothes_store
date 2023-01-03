import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {NotFound} from "./pages/NotFoundPage";
import {Home} from "./pages/HomePage";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="singUp" element={<RegisterPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
