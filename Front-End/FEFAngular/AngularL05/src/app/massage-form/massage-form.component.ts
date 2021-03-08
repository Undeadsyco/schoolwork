import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-massage-form',
  templateUrl: './massage-form.component.html',
  styleUrls: ['./massage-form.component.css']
})
export class MassageFormComponent implements OnInit {
  model: Message = new Message();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Submit Successful: ", this.model)
  }
}
