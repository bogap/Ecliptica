import React from "react";
import {css} from '@emotion/css'


export default function LargeDay(props: { day: number; }) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + props.day);
    const day = currentDate.getDate();
    const dayName = currentDate.toUTCString().split(",")[0];

    return (<>
        <div id='main' className={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100vh;`}>
            <div id='info' className={css`
                border: 2px solid black;
                height: 20%;`}>
                <h1>{dayName}, {day}</h1>
            </div>
            <div id='date' className={css`
                border: 2px solid black;
                height: 80%;`}>
                <h3>Rose</h3>
                <p>28.09</p>
            </div>
        </div>
    </>)
}