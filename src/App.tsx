import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import Home from './pages/Home/home';
import Info from './pages/Info/info';
import {getNavigationsValue} from "@ijl/cli";
import BigCalendar from "./pages/Calendar/BigCalendar/BigCalendar";
import SmallCalendar from "./pages/Calendar/SmallCalendar/SmallCalendar";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={getNavigationsValue('ecliptica.main')} element={<Home/>}/>
                <Route path={getNavigationsValue('ecliptica.info')} element={<Info/>}/>
                <Route path={getNavigationsValue('ecliptica.calendar')} element={<SmallCalendar/>}/>
                <Route path="*" element={<Navigate to="/ecliptica"/>}/>
            </Routes>
        </Router>
    );
};

export default App;

