import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  
})
export class LoginComponent implements OnInit{
  loginDetails={
    email:'',
    password:''
  }
  constructor(private dbioservice:DbioService,private route:Router){

  }
  ngOnInit(): void {
     
  }
login(){
console.log(this.loginDetails)
this.dbioservice.userLogin(this.loginDetails).subscribe((res:any)=>{
  if(res){
    console.log(res.user)
    localStorage.setItem('userDetails',JSON.stringify(res.user))
    this.route.navigate(['/destination/destinations'])
  }
})
}
 }

