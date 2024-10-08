import React from "react";
import Typography from '@mui/material/Typography';
import {css} from "@emotion/css";
import githubLogo from '../../../public/github-mark.png'
import telegramLogo from '../../../public/telegram.png'
import emailLogo from '../../../public/email-svgrepo-com.svg'

export default function Footer() {
    return (<>
            <div id='main'
                 className={css`
                     display: flex;
                     background-color: #9aceeb;
                     height: 5vh;
                     overflow: hidden;
                     align-items: center;
                     gap: 100px`}>
                <div>
                    <Typography>(c) 2024. Ecliptica team</Typography>
                </div>
                <div id='social_media'
                     className={css`
                         display: flex;
                         overflow: hidden;
                         align-items: center;`}>
                    <div id='team_name'>
                        <Typography variant="h5">Follow us:</Typography>
                    </div>
                    <div id='github'>
                        <a href='https://github.com/ch3rnushka/Ecliptica'>
                            <img src={githubLogo} alt='github repo'
                                 className={css`
                                     height: 4vh;
                                     width: 4vh;
                                     padding: 0 20px`}/>
                        </a>
                    </div>
                    <div id='telegram'>
                        <a href='https://t.me'>
                            <img src={telegramLogo} alt='github repo'
                                 className={css`
                                     height: 4vh;
                                     width: 4vh;
                                     padding: 0 20px`}/>
                        </a>
                    </div>
                    <div id='email'>
                        <a href='mailto:student@innopolis.university'>
                            <img src={emailLogo} alt='github repo'
                                 className={css`
                                     height: 4vh;
                                     width: 4vh;
                                     padding: 0 20px`}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}