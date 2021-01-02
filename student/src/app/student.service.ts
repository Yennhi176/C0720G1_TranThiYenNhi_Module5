import {Injectable} from '@angular/core';
import {IStudent} from './model/IStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList: IStudent[] = [];

  constructor() {
  }

  findAll() {
    return this.studentList;
  }
  findById(id): IStudent{
    return this.studentList.find(
      (student) => student.id === id
    );
  }

  saveStudent(student: IStudent){
    this.studentList.unshift(student);
  }
}
