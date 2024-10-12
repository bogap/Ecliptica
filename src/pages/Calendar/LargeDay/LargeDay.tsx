import React, {useEffect, useState} from "react";
import {css} from '@emotion/css'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'


export default function LargeDay(props: { day: number, plant: any }) {
    const [wateredButtonText, setWateredButtonText] = useState("WATERED");
    const [backgroundColor, setBackgroundColor] = useState('#fd7c6e');
    const [wateredButtonColor, setWateredButtonColor] = useState('secondary')

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + props.day);
    const day = currentDate.getDate();
    const dayName = currentDate.toUTCString().split(",")[0];
    const month = currentDate.toUTCString().split(",")[1].split(' ')[2];

    function handleWatered() {
        if (wateredButtonText == 'WATERED') {
            setWateredButtonText("NOT WATERED")
            setBackgroundColor('#00e600')
            setWateredButtonColor('error')
        } else {
            setWateredButtonText("WATERED")
            setBackgroundColor('#fd7c6e')
            setWateredButtonColor('secondary')
        }

    }

    return (<>
        <div id='main' className={css`
            display: flex;
            flex-direction: column;
            border: 1px solid black;
            width: 100%;
            height: 90vh;
            background-color: ${props.plant ? backgroundColor : '#00e600'}`}>
            <div id='date' className={css`
                border-bottom: 1px solid black;
                height: 10vh;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;`}>
                <Typography variant='h4'>{dayName}</Typography>
                <Typography variant='h4'>{day} {month}</Typography>
            </div>
            <div id='info' className={css`
                padding: 20px;
                text-align: center;`}>
                {props.plant ? (
                    <>
                        <Typography variant="h5">{props.plant.name}</Typography>
                        <img src={props.plant.image} alt={props.plant.name}
                             className={css`
                                 max-width: 100%;
                                 height: auto;
                                 border-radius: 15px;
                                 margin-top: 20px;
                             `}/>
                    </>
                ) : (
                    <Typography variant="h5">No plant</Typography>
                )}
            </div>
            <div className={css`display: flex;
                justify-content: center`}>
                <div>
                    {props.plant ? (
                        <Button
                            variant="contained"
                            color={wateredButtonColor === 'error' ? 'error' : 'secondary'}
                            onClick={handleWatered}>
                            {wateredButtonText}
                        </Button>
                    ) : <></>}
                </div>

            </div>

        </div>
    </>)
}