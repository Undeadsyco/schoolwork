import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

import { SkillsService } from './services/skills.service';
import { ContactsService } from './services/contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SkillsService, ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
