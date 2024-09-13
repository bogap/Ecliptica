import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import Home from './pages/Home/home';
import Info from './pages/Info/info';

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/info/:id" element={<Info />} />

              <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </Router>
  );
};

export default App;

