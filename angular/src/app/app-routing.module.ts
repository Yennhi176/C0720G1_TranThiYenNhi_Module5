import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FontSizeComponent} from './3.angular_overview/thuc_hanh/font-size/font-size.component';
import {HackernewsComponent} from './4.angular_component_template/thuc_hanh/hackernews/hackernews.component';
import {LikesComponent} from './4.angular_component_template/bai_tap/nang-cap-hackernews/likes/likes.component';
import {NangCapHackernewsComponent} from './4.angular_component_template/bai_tap/nang-cap-hackernews/nang-cap-hackernews.component';
import {NameCardComponent} from './5. components_interaction/thuc_hanh/name-card/name-card.component';
import {ProgressBarComponent} from './5. components_interaction/thuc_hanh/progress-bar/progress-bar.component';
import {RatingBarComponent} from './5. components_interaction/bai_tap/rating-bar/rating-bar.component';
import {CountdownTimerComponent} from './5. components_interaction/bai_tap/countdown-timer/countdown-timer.component';
import {TodoComponent} from './6.angular_form/thuc_hanh/todo/todo.component';
import {RegisterFinalComponent} from './6.angular_form/bai_tap/register-final/register-final.component';
import {LoginComponent} from './6.angular_form/bai_tap/login/login.component';
import {TimelinesComponent} from './7.service_router/thuc_hanh/timelines/timelines.component';
import {YoutubePlayerComponent} from './7.service_router/thuc_hanh/youtube-player/youtube-player.component';
import {YoutubePlaylistComponent} from './7.service_router/thuc_hanh/youtube-playlist/youtube-playlist.component';
import {DictionaryComponent} from './7.service_router/bai_tap/dictionary/dictionary.component';


const routes: Routes = [
  {path: 'font-size', component: FontSizeComponent},
  {path: 'hacker-news-v1', component: HackernewsComponent},
  {path: 'hacker-news-v2', component: NangCapHackernewsComponent},
  {path: 'likes', component: LikesComponent},
  {path: 'name-card', component: NameCardComponent},
  {path: 'progress-bar', component: ProgressBarComponent},
  {path: 'rating-bar', component: RatingBarComponent},
  {path: 'countdown-timer', component: CountdownTimerComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'register-final', component: RegisterFinalComponent},
  {path: 'login', component: LoginComponent},
  {path: 'time-lines', component: TimelinesComponent},
  {path: 'youtube-player', component: YoutubePlaylistComponent, children: [{path: 'youtube-playlist', component: YoutubePlayerComponent}]},
  {path: 'dictionary', component: DictionaryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
