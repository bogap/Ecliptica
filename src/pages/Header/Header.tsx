import React from 'react'
import {css} from "@emotion/css";
import mainLogo from '../../../public/app_logo.png';
import Typography from '@mui/material/Typography';
import {getNavigationsValue} from "@brojs/cli";

export default function Header() {
    return (<>
            <div id='main' className={css`
                display: flex;
                background-color: #9aceeb;
                height: 5vh;
                justify-content: space-between;`}>
                <div id='logo'>
                    <img src={mainLogo} alt='our logo' className={css`
                        height: 5vh;
                        width: 5vh;
                        padding-left: 50px`}></img>
                </div>
                <div id='Home'>
                    <a href={getNavigationsValue('ecliptica.main')}
                       className={css`
                           text-decoration: none;
                           color: black;
                       `}>
                        <Typography variant="h3">Home</Typography>
                    </a>
                </div>
                <div id='Calendar'>
                    <a href={getNavigationsValue('ecliptica.calendar')}
                       className={css`
                           text-decoration: none;
                           color: black;
                       `}>
                        <Typography variant="h3"
                                    className={css`padding-right: 50px;`}>Calendar</Typography>
                    </a>
                </div>
            </div>
        </>
    )
}