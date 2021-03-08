import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';

import { SkillsService } from './services/skills.service';
import { GreetingComponent } from './greeting/greeting.component';
import { MassageFormComponent } from './massage-form/massage-form.component';

@NgModule({
  declarations: [AppComponent, SkillsComponent, GreetingComponent, MassageFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule {}