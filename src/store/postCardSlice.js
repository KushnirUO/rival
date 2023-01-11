import {createSlice} from '@reduxjs/toolkit'

const postCardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [],
    },
    reducers: {
        addCard(state, action) {
            state.cards.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                subtitle: action.payload.subtitle,
                status: action.payload.status,
                stats: action.payload.stats
            });
        },
        removeCard: (state, action) => {
            state.cards = state.cards.filter(card => card.id !== action.payload.id)
        }
    }
})

export const {addCard, removeCard} = postCardSlice.actions
export default postCardSlice.reducer