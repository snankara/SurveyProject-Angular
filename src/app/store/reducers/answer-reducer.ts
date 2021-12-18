import { setAnswerModel } from './../actions/answer-actions';
import { Answer } from './../../models/answer';
import { createReducer, on } from '@ngrx/store';

export interface AnswerState {
    answerModel : Answer | undefined
}

const initialState: AnswerState = {
    answerModel : undefined,
}

export const AnswerReducer = createReducer(initialState,     
    on(setAnswerModel, (state: AnswerState, {answerModel}) => ({
    ...state,    
    answerModel: answerModel,
}))

)