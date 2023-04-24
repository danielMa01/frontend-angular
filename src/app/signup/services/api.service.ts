import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private message: Message={
    message:"",
    status:false
  };
  private apiUrl = environment.API_URL;
  constructor(private http:HttpClient) { }

  public postData(user:User):Observable<Message>{

    let x = this.http.post<Message>(this.apiUrl,user);
    return x ;
  }

}
