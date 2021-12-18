import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { SurveyComponent } from './components/survey/survey.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressComponent } from './components/progress/progress.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { SubmitComponent } from './components/submit/submit.component';
import { StoreModule } from '@ngrx/store';
import { RootReducers } from './store/root-reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SurveyComponent,
    ProgressComponent,
    FooterComponent,
    SliderComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(RootReducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
