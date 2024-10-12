import React, { useState } from 'react';
import { css } from "@emotion/css";
import { useLocation } from "react-router-dom";
import mainLogo from '../../../public/app_logo.png';
import Typography from '@mui/material/Typography';
import { getNavigationsValue } from "@brojs/cli";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';

export default function Header({ onCalendarViewChange }) {
    const location = useLocation();
    const [calendarView, setCalendarView] = useState('weekly');

    const handleCalendarViewChange = (view) => {
        setCalendarView(view);
        if (onCalendarViewChange) {
            onCalendarViewChange(view);
        }
    };

    return (
        <Box
            id='main'
            className={css`
                display: flex;
                align-items: center;
                background-color: #2c3e50;
                padding: 0 20px;
                height: auto; /* Adjusted */
                overflow: hidden; /* Prevent overflow */
            `}
        >
            <Box id='logo' sx={{ marginRight: '20px' }}>
                <img
                    src={mainLogo}
                    alt='Ecliptica Logo'
                    className={css`
                        height: 55px;
                        width: auto;
                    `}
                />
            </Box>
            <Box id='navigation' display="flex" alignItems="center">
                <Button
                    variant="text"
                    color={location.pathname === '/ecliptica/' ? 'secondary' : 'primary'}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '5px 10px',
                        fontSize: '14px',
                        transition: 'background-color 0.3s, transform 0.7s',
                        '&:hover': {
                            backgroundColor: '#007bbf',
                            borderRadius: '10px',
                            color: 'white',
                            transform: 'scale(1.05)',
                        },
                    }}
                    href={getNavigationsValue('ecliptica.main')}
                >
                    <HomeIcon/>
                    <Typography
                        sx={{
                            marginLeft: '5px',
                            textTransform: 'none',
                            color: '#ffffff'
                        }}
                        variant='body1'
                    >
                        Home
                    </Typography>
                </Button>
                <Button
                    variant="text"
                    color={location.pathname === '/ecliptica/calendar' ? 'secondary' : 'primary'}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '5px 10px',
                        fontSize: '14px',
                        transition: 'background-color 0.3s, transform 0.7s',
                        '&:hover': {
                            backgroundColor: '#007bbf',
                            borderRadius: '10px',
                            color: 'white',
                            transform: 'scale(1.05)',
                        },
                    }}
                    href={getNavigationsValue('ecliptica.calendar')}
                >
                    <CalendarTodayIcon/>
                    <Typography
                        sx={{
                            marginLeft: '5px',
                            textTransform: 'none',
                            color: '#ffffff'
                        }}
                    >
                        Calendar
                    </Typography>
                </Button>

                {location.pathname === '/ecliptica/calendar' && (
                    <Box display="flex" marginLeft="20px">
                        <Button
                            variant="text"
                            color={calendarView === 'weekly' ? 'primary' : 'secondary'}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '5px 10px',
                                fontSize: '14px',
                                marginRight: '10px',
                                marginLeft: '50px',
                                transition: 'background-color 0.3s, transform 0.7s',
                                '&:hover': {
                                    backgroundColor: '#007bbf',
                                    borderRadius: '10px',
                                    color: 'white',
                                    transform: 'scale(1.05)',
                                },
                            }}
                            onClick={() => handleCalendarViewChange('big')}
                        >
                            <ViewWeekIcon sx={{ marginRight: '5px' }} />
                            <Typography
                                sx={{
                                    textTransform: 'none',
                                    color: '#ffffff'
                                }}
                            >
                                3-Day View
                            </Typography>
                        </Button>
                        <Button
                            variant="text"
                            color={calendarView === 'big' ? 'primary' : 'secondary'}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '5px 10px',
                                fontSize: '14px',
                                transition: 'background-color 0.3s, transform 0.7s',
                                '&:hover': {
                                    backgroundColor: '#007bbf',
                                    borderRadius: '10px',
                                    color: 'white',
                                    transform: 'scale(1.05)',
                                },
                            }}
                            onClick={() => handleCalendarViewChange('weekly')}
                        >
                            <CalendarViewWeekIcon sx={{ marginRight: '5px' }} />
                            <Typography
                                sx={{
                                    textTransform: 'none',
                                    color: '#ffffff'
                                }}
                            >
                                7-Day View
                            </Typography>
                        </Button>
                    </Box>
                )}
            </Box>
        </Box>
    );
}
