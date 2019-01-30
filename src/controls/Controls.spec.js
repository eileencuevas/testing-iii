import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls.js';

describe('Controls Test', () => {
    afterEach(cleanup);

    it('displays buttons that have text', () => {
        const { getByTestId } = render(<Controls locked={true} closed={true} />);

        getByTestId('close-btn');
        getByTestId('lock-btn');
    });

    it('disables open/close button when gate is locked', () => {
        const { getByTestId } = render(<Controls locked={true} closed={true} />);

        const closeBtn = getByTestId('close-btn');

        expect(closeBtn).toBeDisabled();
    });

    it('disables lock/unlock button when gate is open', () => {
        const { getByTestId } = render(<Controls locked={false} closed={false} />);

        const lockBtn = getByTestId('lock-btn');

        expect(lockBtn).toBeDisabled();
    });
})