import { AnswerState, AnswerReducer } from "./reducers/answer-reducer";

export interface RootState {
    rootAnswer: AnswerState,
}

export const RootReducers = {
    rootAnswer: AnswerReducer, 
}