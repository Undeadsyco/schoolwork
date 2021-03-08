import { Component, OnInit } from '@angular/core';
import { Places } from '../models/places'

@Component({
  selector: 'app-places-form',
  templateUrl: './places-form.component.html',
  styleUrls: ['./places-form.component.css']
})
export class PlacesFormComponent implements OnInit {
  model: Places = new Places();

  constructor() { }

  ngOnInit() {
  }

  formSubmit(){
    console.log('Submited Favorite Places: ', this.model)
  }
}
