import { Answer } from './../../models/answer';
import { SurveyService } from './../../services/survey.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  answer: Answer | undefined
  isConnectApi : boolean = false;
  isSent : boolean = false;
  answerModel$: Observable<Answer | undefined> = this.surveyService.answerModel$

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getAnswer();
    }, 1500);
  }

  getAnswer() {
    this.answerModel$.subscribe(response => {
      this.answer = response
      if (this.answer) {
        this.connectApi();  
      }
    })
  }

  connectApi(){
    setTimeout(() => {
      this.isConnectApi = true;
      this.submit();
    }, 1500);
  }

  submit(){
    setTimeout(() => {
      this.isSent = true
      //Api Logic
    }, 1500);
  }

}
