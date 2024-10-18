// CalendarPage.test.tsx
import '@testing-library/jest-dom'; // Ensure this is imported
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CalendarPage from './CalendarPage'; // Adjust the import based on your directory structure
import WeeklyCalendar from '../WeeklyCalendar/WeeklyCalendar';
import BigCalendar from '../BigCalendar/BigCalendar';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

jest.mock('../WeeklyCalendar/WeeklyCalendar', () => () => <div>Weekly Calendar</div>);
jest.mock('../BigCalendar/BigCalendar', () => () => <div>Big Calendar</div>);
jest.mock('../../Header/Header', () => ({ onCalendarViewChange }) => (
    <>
        <button onClick={() => onCalendarViewChange('weekly')}>7-Day View</button>
        <button onClick={() => onCalendarViewChange('big')}>3-Day View</button>
    </>
));
jest.mock('../../Footer/Footer', () => () => <div>Footer</div>);

describe('CalendarPage', () => {
    test('renders BigCalendar when 3-Day View clicked', () => {
        render(<CalendarPage />);
        fireEvent.click(screen.getByText('3-Day View'));
        expect(screen.getByText('Big Calendar')).toBeInTheDocument();
        expect(screen.queryByText('Weekly Calendar')).not.toBeInTheDocument();
    });

    test('renders WeeklyCalendar when 7-Day View clicked', () => {
        render(<CalendarPage />);
        fireEvent.click(screen.getByText('3-Day View'));
        fireEvent.click(screen.getByText('7-Day View'));
        expect(screen.getByText('Weekly Calendar')).toBeInTheDocument();
        expect(screen.queryByText('Big Calendar')).not.toBeInTheDocument();
    });
});
