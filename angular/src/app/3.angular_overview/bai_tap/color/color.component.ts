import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  color : '#D44D4A';
  onChange(value){
    this.color = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
