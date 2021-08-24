import { createSlice } from "@reduxjs/toolkit";


const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: JSON.parse(localStorage.getItem('cards')) || {}
    },
    reducers: {
        addCard: (state, action) => ({
            ...state, cards: {...state.cards, [action.payload.id]: action.payload}
        })
    }
})

export const { addCard } = cardsSlice.actions;
export const cardsSelector = (state) => state.cards.cards;
export default cardsSlice.reducer