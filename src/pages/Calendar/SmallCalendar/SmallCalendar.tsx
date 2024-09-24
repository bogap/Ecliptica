import {css} from "@emotion/css";
import LargeDay from "../LargeDay/LargeDay";
import React from "react";

export default function SmallCalendar() {
    return (<>
        <div id='calendars' className={css`
            display: flex;`}>
            <LargeDay day={0}/>
            <LargeDay day={1}/>
            <LargeDay day={2}/>
            <LargeDay day={3}/>
            <LargeDay day={4}/>
            <LargeDay day={5}/>
            <LargeDay day={6}/>
        </div>
    </>)
}
