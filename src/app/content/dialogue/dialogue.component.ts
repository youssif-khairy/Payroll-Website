import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit {

  selected:any;
  selected2:any;
  b1:any ;
  b2:any ;
  aft:any;
  bef:any;
  ename:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
