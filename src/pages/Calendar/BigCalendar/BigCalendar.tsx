import React from "react";
import {css} from '@emotion/css'
import LargeDay from "../LargeDay/LargeDay";

export default function BigCalendar() {
    return (<>
        <div id='calendars' className={css`
            display: flex;`}>
            <LargeDay day={0}/>
            <LargeDay day={1}/>
            <LargeDay day={2}/>
        </div>
    </>)
}