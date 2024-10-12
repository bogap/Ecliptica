import React from 'react';
import {css} from "@emotion/css";
import mainLogo from "../../../public/app_logo.png";
import Typography from '@mui/material/Typography';
import {getNavigationsValue} from "@brojs/cli";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function Header() {
    return (
        <Box
            id='main'
            className={css`
                display: flex;
                background-color: #9aceeb;
                height: 5vh;
                align-items: center;
                padding: 0 50px;
            `}>
            <Box id='logo'>
                <img
                    src={mainLogo}
                    alt='Ecliptica Logo'
                    className={css`height: 5vh;
                        width: 5vh;`}
                />
            </Box>
            <Box id='navigation' display="flex" justifyContent="flex-start">
                <Button
                    variant="text"
                    color="secondary"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '10px 30px',
                        transition: 'background-color 0.3s, transform 0.7s',
                        '&:hover': {
                            backgroundColor: '#007bbf',
                            borderRadius: '10px',
                            color: 'white',
                            transform: 'scale(1.05)'
                        }
                    }}
                    href={getNavigationsValue('ecliptica.main')}
                >
                    <HomeIcon/>
                    <Typography variant="h4"
                                sx={{marginLeft: '8px', textTransform: 'none', fontWeight: "bold"}}>Home</Typography>
                </Button>
                <Button
                    variant="text"
                    color="secondary"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '10px 30px',
                        transition: 'background-color 0.3s, transform 0.7s',
                        '&:hover': {
                            backgroundColor: '#007bbf',
                            borderRadius: '10px',
                            color: 'white',
                            transform: 'scale(1.05)'
                        }
                    }}
                    href={getNavigationsValue('ecliptica.calendar')}
                >
                    <CalendarTodayIcon/>
                    <Typography variant="h4" sx={{
                        marginLeft: '8px',
                        textTransform: 'none',
                        fontWeight: "bold"
                    }}>Calendar</Typography>
                </Button>
            </Box>
        </Box>
    );
}
