import React from 'react';
import { render } from '@testing-library/react-native';
import { StarRating } from '../StarRating';

test('the component rendered', () => {
    //ecrever test
    render(<StarRating rating={{ average: 7 }} />);
}); 