import React, { createRef } from 'react';
import { render } from '@testing-library/react-native'
import { SeasonModal } from '../SeasonModal';
import { Modalize } from 'react-native-modalize';


describe('SeasonModal', () => {
    test('the component rendered', () => {
        const modalizeRef = createRef<Modalize>();

        const { debug } = render(
            <SeasonModal
                seasons={['1', '2', '3']}
                selectedSeason='1'
                onSelectSeason={(season) => console.log(season)}
            />
        );

        debug();
    })
})