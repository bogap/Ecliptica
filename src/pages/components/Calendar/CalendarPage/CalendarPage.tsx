import React, { useState } from "react";
import WeeklyCalendar from "../WeeklyCalendar/WeeklyCalendar";
import BigCalendar from "../BigCalendar/BigCalendar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function CalendarPage() {
    const [calendarView, setCalendarView] = useState("weekly");

    return (
        <div>
            <Header onCalendarViewChange={setCalendarView} />

            {calendarView === "weekly" ? <WeeklyCalendar /> : <BigCalendar />}
            <Footer />
        </div>
    );
}
