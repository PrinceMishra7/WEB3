import React from "react";
import { Routes, Route} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Landing from "./Landing";
const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
  );
}

export default App;
