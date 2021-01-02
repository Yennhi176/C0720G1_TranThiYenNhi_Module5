import {Component, OnInit} from '@angular/core';
import {IStudent} from '../model/IStudent';
import {StudentDao} from '../model/StudentDao';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  studentList: IStudent[];
  studentDetail: IStudent;

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
      // this.studentList = StudentDao.getStudentList();
    this.studentList = this.studentService.findAll();
  }


  getDetailStudent(students: IStudent) {
    this.studentDetail = students;
  }
  getMark(value: any) {
    // this.student.mark = value;
  }
}
