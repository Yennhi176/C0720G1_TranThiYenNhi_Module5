import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './3.angular_overview/thuc_hanh/font-size/font-size.component';
import {FormsModule} from '@angular/forms';
import { PetComponent } from './3.angular_overview/thuc_hanh/pet/pet.component';
import { CalculatorComponent } from './3.angular_overview/bai_tap/calculator/calculator.component';
import { ColorComponent } from './3.angular_overview/bai_tap/color/color.component';
import { HackernewsComponent } from './4.angular_component_template/thuc_hanh/hackernews/hackernews.component';
import { NangCapHackernewsComponent } from './4.angular_component_template/bai_tap/nang-cap-hackernews/nang-cap-hackernews.component';
import { LikesComponent } from './4.angular_component_template/bai_tap/nang-cap-hackernews/likes/likes.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    CalculatorComponent,
    ColorComponent,
    HackernewsComponent,
    NangCapHackernewsComponent,
    LikesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
