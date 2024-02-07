import React from 'react';
import { render } from '@testing-library/react-native'
import { SeasonModal } from '../SeasonModal';


describe('SeasonModal', () => {
    test('the component rendered', () => {
        render(
            <SeasonModal
                seasons={['1', '2', '3']}
                selectedSeason='1'
                onSelectSeason={(season) => console.log(season)}
            />
        )
    })
})