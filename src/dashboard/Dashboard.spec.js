import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('Dashboard Tests', () => {
    it('should show the controls and display', () => {
        const { getByTestId } = render(<Dashboard />);

        getByTestId('locked-display');
        getByTestId('closed-display');
        getByTestId('close-btn');
        getByTestId('lock-btn');
    })
})
