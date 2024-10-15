import React, {useEffect, useState} from "react";
import {css} from '@emotion/css'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import WaterIcon from '@mui/icons-material/Water';
import ClearIcon from '@mui/icons-material/Clear';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {Link} from "react-router-dom";


export default function DayCard(props: { day: number, plant: any }) {
    const [wateredButtonText, setWateredButtonText] = useState("Watered");
    const [backgroundColor, setBackgroundColor] = useState('#fd7c6e');
    const [wateredButtonColor, setWateredButtonColor] = useState('secondary')
    const [isWatered, setIsWatered] = useState(false);

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + props.day);
    const day = currentDate.getDate();
    const dayName = currentDate.toUTCString().split(",")[0];
    const month = currentDate.toUTCString().split(",")[1].split(' ')[2];

    function handleWatered() {
        if (wateredButtonText === 'Watered') {
            setWateredButtonText("Not watered")
            setBackgroundColor('#00e600')
            setWateredButtonColor('error')
            setIsWatered(true);
        } else {
            setWateredButtonText("Watered")
            setBackgroundColor('#fd7c6e')
            setWateredButtonColor('secondary')
            setIsWatered(false);
        }

    }

    return (<>
        <div id='main' className={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 90vh;
            background-color: ${props.plant ? backgroundColor : '#00e600'};
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            margin: 5px;
        `}>
            <div id='date' className={css`
                height: 15vh;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: rgba(255, 255, 255, 0.5);`}>
                <CalendarTodayIcon color="action"/>
                <Typography variant='h5' marginTop='5px'>{dayName}</Typography>
                <div className={css`display: flex;
                    gap: 10px`}>
                    <Typography variant='h5' color='#1976d2'>{day}</Typography>
                    <Typography variant='h6'>{month}</Typography>
                </div>

            </div>
            <Link
                key={props.plant.id}
                to={`/ecliptica/info/${props.plant.id}`}
                state={{props.plant}}
                className="plant-link"
            >
                <div id='info' className={css`
                    padding: 20px;
                    text-align: center;`}>
                    {props.plant ? (
                        <>
                            <Typography variant="h5">{props.plant.alias}</Typography>
                            <img src={props.plant.image_url} alt={props.plant.alias}
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
            </Link>
            <div className={css`display: flex;
                justify-content: center`}>
                <div>
                    {props.plant ? (
                        <Button
                            variant="contained"
                            color={wateredButtonColor === 'error' ? 'error' : 'secondary'}
                            onClick={handleWatered}
                            startIcon={isWatered ? <ClearIcon/> : <WaterIcon/>}>
                            {wateredButtonText}
                        </Button>
                    ) : <></>}
                </div>

            </div>

        </div>
    </>)
}