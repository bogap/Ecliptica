import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function CalendarPage() {
    const [calendarView, setCalendarView] = useState("weekly");

    const getDayCount = () => {
        return calendarView === "weekly" ? 7 : 3;
    };

    return (
        <div>
            <Header onCalendarViewChange={setCalendarView} />
            <Calendar dayCount={getDayCount()} />
            <Footer />
        </div>
    );
}
