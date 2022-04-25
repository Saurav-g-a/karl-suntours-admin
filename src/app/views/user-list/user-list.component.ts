import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
userList:any=[]
  constructor( private dbioService:DbioService,private route:Router) { }

  ngOnInit(): void {
    this.getUser()
  }
edit (id){
 this.route.navigate([`usermangement/edit-user/`+id])
}
getUser(){
  this.dbioService.getUser().subscribe((res:any)=>{
    this.userList=res
  })
}
delete(id){
  this.dbioService.deleteUser(id).subscribe((res:any)=>{
    if(res.success==true){
      this.getUser()
    }
  })
}
}

