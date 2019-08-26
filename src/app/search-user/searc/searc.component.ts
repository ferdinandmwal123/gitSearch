import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searc',
  templateUrl: './searc.component.html',
  styleUrls: ['./searc.component.css']
})
export class SearcComponent implements OnInit {
 /* @Output()emitSearch = new EventEmitter<any>()
  searchIt: string;  */
  constructor() { }
/*
   search() {
    this.emitSearch.emit(this.searchIt);
   // console.log(this.searchIt);
  } */


  ngOnInit() {
  }

}
