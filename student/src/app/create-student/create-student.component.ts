import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  createStudentForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.createStudentForm = new FormGroup({
    });
  }

}
