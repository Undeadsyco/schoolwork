import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsService } from './services/skills.service';
import { GreetingComponent } from './greeting/greeting.component'

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
