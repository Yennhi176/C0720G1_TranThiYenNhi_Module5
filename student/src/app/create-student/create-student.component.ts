import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IStudent} from '../model/IStudent';
import {StudentDao} from '../model/StudentDao';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  createStudentForm: FormGroup;
  // @Input()
  // studentList: IStudent[];


  constructor() {
  }
  // tslint:disable-next-line:variable-name
  validation_messages = {
    name: [
      { type: 'required', message: 'name is  required' },
      { type: 'minlength', message: 'name > 5.' },
    ],
    id: [
      { type: 'required', message: 'id is  required' },
    ],
    address: [
      { type: 'required', message: 'address is  required' }
    ],
   };

  ngOnInit(): void {
    this.createStudentForm = new FormGroup(
      {
        id: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required, Validators.minLength(5)]),
        address: new FormControl('', [Validators.required]),
        age: new FormControl(''),
        mark: new FormControl(''),
        image: new FormControl('')
      }
    );
  }

  saveStudent(createStudentForm: FormGroup) {
    console.log(createStudentForm.value);
    StudentDao.getStudentList().unshift(createStudentForm.value);
  }
}
