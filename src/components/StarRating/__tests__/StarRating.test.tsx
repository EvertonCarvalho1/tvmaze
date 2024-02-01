import React from 'react';
import { render } from '@testing-library/react-native';
import { StarRating } from '../StarRating';

describe('StarRating', () => {
    test('if passed rating show the average', () => {
        //ecrever test
        const { getByText, getByTestId } = render(<StarRating rating={{ average: 7 }} />);

        const element = getByText('7');
        const icon = getByTestId('starIcon');

        expect(element).toBeTruthy();
    });
});
