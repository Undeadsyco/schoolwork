import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FavoritePlacesComponent } from './favorite-places/favorite-places.component';

import { PlacesService } from './services/places.service';
import { PlacesFormComponent } from './places-form/places-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritePlacesComponent,
    PlacesFormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
