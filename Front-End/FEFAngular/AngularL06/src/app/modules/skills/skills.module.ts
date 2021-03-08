import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from './components/skills/skills.component';
import { SkillsService } from './services/skills.service'

@NgModule({
  declarations: [SkillsComponent],
  imports: [CommonModule],
  providers: [SkillsService],
  exports: [SkillsComponent]
})
export class SkillsModule { }
