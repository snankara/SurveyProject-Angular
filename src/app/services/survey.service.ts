import { setAnswerModel } from './../store/actions/answer-actions';
import { Answer } from './../models/answer';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootState } from '../store/root-reducer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  answerModel$ : Observable<Answer | undefined> = this.store.select((state) => state.rootAnswer).pipe(map((bind) => bind.answerModel))

  constructor(private store: Store<RootState>) { }

  setAnswerModel(answerModel: Answer){
    this.store.dispatch(setAnswerModel({answerModel: answerModel}))
  }

}
