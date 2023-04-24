import { Component, ElementRef, ViewChild } from '@angular/core';
import { Message } from './models/message';
import { ApiService } from './services/api.service';
import { User } from './models/user';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignUpComponent {

  public mess: Message = {message:"",status:false};

  @ViewChild('form-data') data: ElementRef | undefined;

  constructor(private apiService:ApiService){

  }

  submitData(username:string, password:string,$event:Event){
    $event.preventDefault();
    let user:User={
      username,password
    }
    this.saveData(user);
  }

  private saveData(user:User) {
      this.apiService.postData(user).subscribe(message =>(this.mess = message));
      console.log(this.mess.message);
  }



}