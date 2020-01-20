import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fontSize = '';
  msg = '';
  fontColor = '';
  msg2 = '';

  name = '';
  lanme = '';
  fullName = '';
  sum: number;
  input1: number;
  input2: number;
  constructor() { }

  ngOnInit() {
    this.msg = 'home word';
    this.fontSize ='50px';
    this.fontColor = '#F00';
  }

  setName(){
    return this.fullName = this.name + ' ' + this.lanme;
  }

  summary(){
this.sum = this.input1 + this.input2;
  }

  del(){
    this.input1 = 0
    this.input2 = 0
    this.sum = 0
  }

}
