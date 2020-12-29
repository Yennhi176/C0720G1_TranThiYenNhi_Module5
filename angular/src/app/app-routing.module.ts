import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FontSizeComponent} from './3.angular_overview/thuc_hanh/font-size/font-size.component';
import {HackernewsComponent} from './4.angular_component_template/thuc_hanh/hackernews/hackernews.component';
import {LikesComponent} from './4.angular_component_template/bai_tap/nang-cap-hackernews/likes/likes.component';
import {NangCapHackernewsComponent} from './4.angular_component_template/bai_tap/nang-cap-hackernews/nang-cap-hackernews.component';


const routes: Routes = [
  {path: 'font-size', component: FontSizeComponent},
  {path: 'hacker-news-v1', component: HackernewsComponent},
  {path: 'hacker-news-v2', component: NangCapHackernewsComponent},
  {path: 'likes', component: LikesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }