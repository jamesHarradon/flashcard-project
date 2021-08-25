import reducer, { addCard } from './cardsSlice';

test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        cards: {}
    });
})