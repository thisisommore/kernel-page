import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient, HttpParams } from "@angular/common/http";
import { authlogin } from '../login.interceptor.service';

@Component({
  selector: "login-page",
  templateUrl: "./login.component.html"
})
export class loginComponent {
  apiUrl : string=
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyChWddIgH1ZyhXVkCvxNaJSM-ebeoTTdSs";
  constructor(private http : HttpClient,private authM: authlogin){}
  onSub(eleData: NgForm) {
    console.log("Values", eleData.value);
    this.getLoginToken(eleData.value.email,eleData.value.password);
  }

  getLoginToken(usernameVar: string,passwordVar : string)
  {
    this.http.post<{idToken : string}>(this.apiUrl,{
      email: usernameVar,
      password: passwordVar,
      returnSecureToken: true,
      params: new HttpParams().append("email",usernameVar
      )
    }).subscribe(
      response =>
      {
        this.authM.authToken = response.idToken;
      }
    )
  }
}
