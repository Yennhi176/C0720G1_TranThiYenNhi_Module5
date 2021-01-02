import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from '../model/IStudent';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  student: IStudent;
  sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.student = this.studentService.findById(id);
    });
  }

  getMark(value: any) {
    this.student.mark = value;
  }
}
