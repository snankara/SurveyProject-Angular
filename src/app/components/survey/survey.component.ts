import { SurveyService } from './../../services/survey.service';
import { cities } from './../../data/cities';
import { Answer } from '../../models/answer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
const _ = require('lodash');

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  answer: Answer;
  surveyForm: FormGroup
  progress: number = 0;
  cities = cities;
  days = _.range(1, 32);
  months = _.range(1, 13);
  years = _.range(1849, 2022);

  constructor(private formBuilder: FormBuilder, private route: Router, private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.createSurveyForm();

  }

  createSurveyForm() {
    this.surveyForm = this.formBuilder.group({
      gender: [""],
      dateOfBirth: {
        day: [""],
        month: [""],
        year: [""]
      },
      placeOfBirth: [""]
    })
  }

  setGender(event: any) {
    this.surveyForm.value.gender = event.target.value;
    this.nextProgress(33.33);
  }

  setDay(event: any) {
    this.surveyForm.value.dateOfBirth.day = event.target.value
  }

  setMonth(event: any) {
    this.surveyForm.value.dateOfBirth.month = event.target.value
  }

  setYear(event: any) {
    this.surveyForm.value.dateOfBirth.year = event.target.value
    this.nextProgress(66.66);
  }

  setPlaceOfBirth(event: any) {
    this.surveyForm.value.placeOfBirth = event.target.value
    this.nextProgress(99.99);
  }

  nextProgress(progressValue: number) {
    this.progress = Math.round(progressValue);
    this.checkProgress(this.progress);
  }

  checkProgress(progressValue : number){
    if (progressValue == 100) {
      this.setAnswerModel();

      setTimeout(() => {
        this.route.navigateByUrl('submit');;
      }, 1500);
      
    }
  }

  setAnswerModel(){
    if (this.surveyForm.valid) {
      let answerModel = Object.assign({}, this.surveyForm.value);
      this.surveyService.setAnswerModel(answerModel);
    }
  }
}
