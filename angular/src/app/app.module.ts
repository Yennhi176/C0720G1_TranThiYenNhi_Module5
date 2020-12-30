import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './3.angular_overview/thuc_hanh/font-size/font-size.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PetComponent } from './3.angular_overview/thuc_hanh/pet/pet.component';
import { CalculatorComponent } from './3.angular_overview/bai_tap/calculator/calculator.component';
import { ColorComponent } from './3.angular_overview/bai_tap/color/color.component';
import { HackernewsComponent } from './4.angular_component_template/thuc_hanh/hackernews/hackernews.component';
import { NangCapHackernewsComponent } from './4.angular_component_template/bai_tap/nang-cap-hackernews/nang-cap-hackernews.component';
import { LikesComponent } from './4.angular_component_template/bai_tap/nang-cap-hackernews/likes/likes.component';
import { NameCardComponent } from './5. components_interaction/thuc_hanh/name-card/name-card.component';
import { ProgressBarComponent } from './5. components_interaction/thuc_hanh/progress-bar/progress-bar.component';
import { RatingBarComponent } from './5. components_interaction/bai_tap/rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './5. components_interaction/bai_tap/countdown-timer/countdown-timer.component';
import { CountdownTimerAliasComponent } from './5. components_interaction/bai_tap/countdown-timer-alias/countdown-timer-alias.component';
import { CountdownTimerEventComponent } from './5. components_interaction/bai_tap/countdown-timer-event/countdown-timer-event.component';
import { CountdownTimerEventAliasComponent } from './5. components_interaction/bai_tap/countdown-timer-event-alias/countdown-timer-event-alias.component';
import { CountdownTimerGetSetComponent } from './5. components_interaction/bai_tap/countdown-timer-get-set/countdown-timer-get-set.component';
import { CountdownTimerOnchangesComponent } from './5. components_interaction/bai_tap/countdown-timer-onchanges/countdown-timer-onchanges.component';
import { TodoComponent } from './6.angular_form/thuc_hanh/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    CalculatorComponent,
    ColorComponent,
    HackernewsComponent,
    NangCapHackernewsComponent,
    LikesComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent,
    CountdownTimerAliasComponent,
    CountdownTimerEventComponent,
    CountdownTimerEventAliasComponent,
    CountdownTimerGetSetComponent,
    CountdownTimerOnchangesComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
