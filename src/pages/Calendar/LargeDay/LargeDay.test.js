// LargeDay.test.tsx
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import LargeDay from './LargeDay';

const mockDate = new Date();
const mockDayOffset = 0;

describe('LargeDay Component', () => {
    test('renders the correct date based on the day prop', () => {
        render(<LargeDay day={mockDayOffset} plant={{name: 'Fern', image: 'fern.png'}}/>);

        const expectedDate = new Date(mockDate);
        expectedDate.setDate(expectedDate.getDate() + mockDayOffset);

        const dayName = expectedDate.toUTCString().split(",")[0];
        const day = expectedDate.getDate();
        const month = expectedDate.toUTCString().split(",")[1].split(' ')[2];

        expect(screen.getByText(dayName)).toBeInTheDocument();
        expect(screen.getByText(day + ' ' + month)).toBeInTheDocument();
    });
});
