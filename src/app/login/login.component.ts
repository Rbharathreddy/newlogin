import { Component } from '@angular/core';
import{ HttpClient, HttpClientModule}  from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj:login;
  constructor(private http:HttpClient){
    this.loginObj =new login();
  }
  onlogin(){
    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login',this.loginObj).subscribe((res:any)=>{
      if(res.result){
        console.log("login sucess")

      }else{
        console.log(res.message)
      }
    })
  }

}
export class login{
  EmailId:string;
  Password:string;
  constructor(){
     this.EmailId ='';
     this.Password ='';
  }

}
