import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Navigate, generatePath} from 'react-router-dom';
import Home from './pages/Home/home';
import Info from './pages/Info/info';
import {getNavigationsValue} from "@ijl/cli";

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path={getNavigationsValue('ecliptica.main')} element={<Home />} />
              <Route path={getNavigationsValue('ecliptica.info')} element={<Info />} />

              <Route path="*" element={<Navigate to="/ecliptica" />} />
          </Routes>
      </Router>
  );
};

export default App;

