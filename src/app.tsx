import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from "./pages/Home/home";
import Info from "./pages/Info/info";
import { getNavigationsValue } from "@brojs/cli";
import CalendarPage from "./pages/components/Calendar/CalendarPage/CalendarPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        h3: {
            fontSize: "1.2rem",
            "@media (min-width:600px)": {
                fontSize: "1.5rem",
            },
            "@media (min-width:900px)": {
                fontSize: "2rem",
            },
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route
                        path={getNavigationsValue("ecliptica.main")}
                        element={<Home />}
                    />
                    <Route
                        path={getNavigationsValue("ecliptica.info")}
                        element={<Info />}
                    />
                    <Route
                        path={getNavigationsValue("ecliptica.calendar")}
                        element={<CalendarPage />}
                    />
                    <Route path="*" element={<Navigate to="/ecliptica" />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
