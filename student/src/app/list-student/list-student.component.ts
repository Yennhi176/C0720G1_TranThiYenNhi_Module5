import {Component, OnInit} from '@angular/core';
import {IStudent} from '../model/IStudent';
import {StudentDao} from '../model/StudentDao';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  studentList: IStudent[] ;
  // [
  // {
  //   id: 1,
  //   name: 'Tran Yen Nhi1',
  //   address: 'Quang Ngai',
  //   age: 22,
  //   mark: 0,
  //   image: 'https://i.pinimg.com/originals/31/07/6b/31076b612c07839a4ed394b2901971bc.jpg'
  // },
  // {
  //   id: 2,
  //   name: 'Tran Yen Nhi2',
  //   address: 'Quang Ngai',
  //   age: 22,
  //   mark: 0,
  //   image: 'https://i.pinimg.com/originals/31/07/6b/31076b612c07839a4ed394b2901971bc.jpg'
  // },
  // {
  //   id: 3,
  //   name: 'Tran Yen Nhi3',
  //   address: 'Quang Ngai',
  //   age: 22,
  //   mark: 0,
  //   image: 'https://i.pinimg.com/originals/31/07/6b/31076b612c07839a4ed394b2901971bc.jpg'
  // },
  // ];
  studentDetail: IStudent;

  constructor() {
  }

  ngOnInit(): void {
    this.studentList = new StudentDao().studentDao;
  }


  getDetailStudent(students: IStudent) {
    this.studentDetail = students;
  }
}
