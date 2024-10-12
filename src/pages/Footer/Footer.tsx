import React from "react";
import Typography from '@mui/material/Typography';
import {css} from "@emotion/css";
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';


export default function Footer() {
    return (<>
            <div id='main'
                 className={css`
                     display: flex;
                     background-color: #2c3e50;
                     height: 5vh;
                     width: 100%;
                     overflow: hidden;
                     align-items: center;
                     gap: 100px;
                 `}>
                <div>
                    <Typography variant="body1" sx={{fontWeight: '100', marginLeft: '20px', color: '#ffffff'}}>
                        © 2024 Ecliptica Team
                    </Typography>
                </div>
                <div id='social_media'
                     className={css`
                         display: flex;
                         overflow: hidden;
                         align-items: center;`}>
                    <div id='team_name'>
                        <Typography variant="h5" sx={{fontWeight: '100', color: '#ffffff'}}>Follow us:</Typography>
                    </div>
                    <div id='github'>
                        <a href='https://github.com/ch3rnushka/Ecliptica'>
                            <GitHubIcon sx={{
                                fontSize: '2rem',
                                color: '#ffffff',
                                paddingLeft: '20px',
                                transition: 'transform 0.3s'
                            }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                                        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1.0)"}
                            />
                        </a>
                    </div>
                    <div id='telegram'>
                        <a href='https://t.me'>
                            <TelegramIcon sx={{
                                fontSize: '2rem',
                                color: '#3dcef2',
                                paddingLeft: '20px',
                                transition: 'transform 0.3s'
                            }}
                                          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                                          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1.0)"}
                            />
                        </a>
                    </div>
                    <div id='email'>
                        <a href='mailto:student@innopolis.university'>
                            <EmailIcon sx={{
                                fontSize: '2rem',
                                color: '#ffffff',
                                paddingLeft: '20px',
                                transition: 'transform 0.3s'
                            }}
                                       onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                                       onMouseOut={(e) => e.currentTarget.style.transform = "scale(1.0)"}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}