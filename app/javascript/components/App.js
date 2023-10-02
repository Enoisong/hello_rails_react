import React from "react";
import Greeting from "./greeting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Router>
  </>
);

export default App;
