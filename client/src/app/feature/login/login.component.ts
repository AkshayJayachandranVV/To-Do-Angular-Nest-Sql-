import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '../../constraints/endpoint';
import { Router } from '@angular/router';


interface loginResponse {
  success : boolean;
  message : string;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  email : string = ""
  password : string = ""
  error : string = " "

  constructor (private http : HttpClient , private route : Router) {}


  login() {
   try {
    console.log("enetered")
    console.log(this.email)
    
      if (!this.email || !this.password) {
        this.error = "Please fill in all required fields.";
        return;
      }

    this.http.post<loginResponse>(API_ENDPOINTS.login,{email:this.email,password:this.password}).subscribe({next : (response) =>{
      console.log("hahhaha",response)
      if(response.success === true){
           this.route.navigate(['home'])
      }else{
        this.error = response.message
      }
    }})

   } catch (error) {
    console.log(error)
   }
  }

}
