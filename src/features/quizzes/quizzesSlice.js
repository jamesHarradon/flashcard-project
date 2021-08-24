import { createSlice } from "@reduxjs/toolkit";


export const addNewQuiz = (quizObj) => {
    return (dispatch) => {
        dispatch({ type: 'quizzes/addQuiz', payload: quizObj});
        dispatch({ type: 'topics/addQuizId', payload: {quizId: quizObj.id, topicId: quizObj.topicId}})
    }
}



const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: JSON.parse(localStorage.getItem('quizzes')) || {}
    },
    reducers: {
        addQuiz: (state, action) => ({
            ...state, quizzes: {...state.quizzes, [action.payload.id]: action.payload}
        })
    }
});

export const quizzesSelector = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;
export const { addQuiz } = quizzesSlice.actions;