import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateStudentComponent} from './create-student/create-student.component';
import {ListStudentComponent} from './list-student/list-student.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';


const routes: Routes = [
  {path: '', component: ListStudentComponent},
  {path: 'create', component: CreateStudentComponent},
  {path: 'detail/:id', component: StudentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
