import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './signup.component';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SignUpComponent
  ]
})
export class SignupModule { }
