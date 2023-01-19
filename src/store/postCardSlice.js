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
                subtitle: '5 days ago',
                status: action.payload.status,
                stats: Math.ceil(Math.random()*500),
            });
        },
        removeCard: (state, action) => {
            state.cards = state.cards.filter( card => card.id !== action.payload.id)
        },
        editCard(state, action) {
            state.cards.map(card => {
                if(card.id === action.payload.id){
                    card.title = action.payload.title;
                    card.status = action.payload.status;
                }
            })
        },

    }
})

export const {addCard, removeCard, editCard} = postCardSlice.actions
export default postCardSlice.reducer