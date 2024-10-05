import React, {useEffect, useState} from "react";
import {css} from '@emotion/css'


export default function LargeDay(props: { day: number, plant: any }) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + props.day);
    const day = currentDate.getDate();
    const dayName = currentDate.toUTCString().split(",")[0];
    const month = currentDate.toUTCString().split(",")[1].split(' ')[2];

    return (<>
        <div id='main' className={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100vh;
            background-color: ${props.plant ? '#fd7c6e' : '#00e600'}`}>
            <div id='info' className={css`
                border: 2px solid black;
                height: 20%;`}>
                <h1>{dayName}, {day} {month}</h1>
            </div>
            <div id='date' className={css`
                border: 2px solid black;
                height: 80%;`}>
                {props.plant ? (
                        <>
                            <h3>{props.plant.name}</h3>
                            <p>{props.plant.deadline}</p>
                            <img src={props.plant.image} alt={props.plant.name} width="100%" />
                        </>
                    ) : (
                        <h3>No plant</h3>
                    )}
            </div>
        </div>
    </>)
}