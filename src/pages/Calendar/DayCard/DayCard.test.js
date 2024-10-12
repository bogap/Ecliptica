// DayCard.test.tsx
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import DayCard from './DayCard';

const mockDate = new Date();
const mockDayOffset = 0;

describe('DayCard Component', () => {
    test('checks the date', () => {
        render(<DayCard day={mockDayOffset} plant={{
            name: 'Cactus',
            image: 'https://avatars.mds.yandex.net/i?id=eb69cd6e6d9610f1ed6801c530276ab0_l-10696380-images-thumbs&n=13'
        }}/>);

        const expectedDate = new Date(mockDate);
        expectedDate.setDate(expectedDate.getDate() + mockDayOffset);

        const dayName = expectedDate.toUTCString().split(",")[0];
        const day = expectedDate.getDate();
        const month = expectedDate.toUTCString().split(",")[1].split(' ')[2];

        expect(screen.getByText(dayName)).toBeInTheDocument();
        expect(screen.getByText(day + ' ' + month)).toBeInTheDocument();
    });
});
