import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searc',
  templateUrl: './searc.component.html',
  styleUrls: ['./searc.component.css']
})
export class SearcComponent implements OnInit {
searchIt:string;
@Output() emitSearch = new EventEmitter<any>()
  constructor() { }
search (){
  this.emitSearch.emit(this.searchIt);
}
  ngOnInit() {
  }

}
