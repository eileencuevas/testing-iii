import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('Display Test', () => {
    afterEach(cleanup);

    it(`should have two displays`, () =>{
        const { getByTestId } = render(<Display closed={true} />);

        getByTestId('closed-display');
        getByTestId('locked-display');
    })

    it(`should display 'closed' when props.closed is true`, () =>{
        const { getByTestId } = render(<Display closed={true} />);

        const closedDisplay = getByTestId('closed-display');

        expect(closedDisplay).toHaveTextContent('Closed');
    })

    it(`should display 'open' when props.closed is false`, () =>{
        const { getByTestId } = render(<Display />);

        const closedDisplay = getByTestId('closed-display');

        expect(closedDisplay).toHaveTextContent('Open');
    })

    it(`should display 'locked' when props.locked is true`, () =>{
        const { getByTestId } = render(<Display locked={true} />);

        const lockedDisplay = getByTestId('locked-display');

        expect(lockedDisplay).toHaveTextContent('Locked');
    })

    it(`should display 'unlocked' when props.locked is false`, () =>{
        const { getByTestId } = render(<Display />);

        const lockedDisplay = getByTestId('locked-display');

        expect(lockedDisplay).toHaveTextContent('Unlocked');
    })

    it(`should use the 'red-led' class when 'locked' or 'closed' is true`, () =>{
        const { getByTestId } = render(<Display locked={true} closed={true} />);

        const closedDisplay = getByTestId('closed-display');
        const lockedDisplay = getByTestId('locked-display');

        expect(closedDisplay).toHaveClass('red-led');
        expect(lockedDisplay).toHaveClass('red-led');
    })

    it(`should use the 'green-led' class when 'locked' or 'closed' is false`, () =>{
        const { getByTestId } = render(<Display />);

        const closedDisplay = getByTestId('closed-display');
        const lockedDisplay = getByTestId('locked-display');

        expect(closedDisplay).toHaveClass('green-led');
        expect(lockedDisplay).toHaveClass('green-led');
    })
})
