import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageFormComponent } from './component/message-form/message-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MessageFormComponent],
  imports: [CommonModule, FormsModule],
  providers: [],
  exports: [MessageFormComponent]
})
export class MessageFormModule { }
