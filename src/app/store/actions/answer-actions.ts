import { Answer } from '../../models/answer';
import { createAction, props } from '@ngrx/store';

export const setAnswerModel = createAction('setAnswerModel', props<{answerModel : Answer}>())
