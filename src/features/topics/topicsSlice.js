import { createSlice } from "@reduxjs/toolkit";


const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: JSON.parse(localStorage.getItem('topics')) || {}
    },
    reducers: {
        // I know I can mutate state safely but left this code as is.
        addTopic: (state, action) => ({
        ...state, topics: {...state.topics, [action.payload.id]: {...action.payload, quizIds: []}}
        }),

        addQuizId: (state, action) => {
            const { quizId, topicId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }        
    }
})

export const topicsSelector = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;