import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';
@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.scss']
})
export class UsermanagementComponent implements OnInit {
heading:any='Add User Data';
userId:any;
  constructor(private route:Router,private activatedRoute:ActivatedRoute,  private dbioService:DbioService) { }
  user:any={
   
    name:"",
    email:"",
    role:"",
    password:''
   
  }
  ngOnInit(): void {
    this.userId=this.activatedRoute.snapshot.paramMap.get('id')
    if(this.userId){
      this.heading='Edit User Data'
      this.getUserData(this.userId)
    }
  }
getUserData(id){
this.dbioService.getUserDetails(id).subscribe((res:any)=>{
  console.log(res)
  this.user={...res};
})
}
  submit(){
this.dbioService.createUser(this.user).subscribe((res:any)=>{
  if(res.role){
    this.route.navigate(['/usermangement/userList'])
  }
})
  }
  updateUser(){
    delete this.user.id
    delete this.user.isEmailVerified
    this.user.userId=this.userId
    console.log(this.user)
    this.dbioService.updateUserData(this.user).subscribe((res:any)=>{
      if(res){
        this.route.navigate(['/usermangement/userList'])
      }
    })
  }
}
