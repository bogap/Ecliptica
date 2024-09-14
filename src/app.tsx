import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import Home from './pages/Home/home';
import Info from './pages/Info/info';

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/ecliptica" element={<Home />} />
              <Route path="/ecliptica/info/:id" element={<Info />} />

              <Route path="*" element={<Navigate to="/ecliptica" />} />
          </Routes>
      </Router>
  );
};

export default App;

