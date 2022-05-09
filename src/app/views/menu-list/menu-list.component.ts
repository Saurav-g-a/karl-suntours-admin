import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
menuList:any=[];
  constructor(private dbioService:DbioService,private route:Router ) { }

  ngOnInit(): void {
    this.getMenuList()
  }
getMenuList(){
  this.dbioService.getMenusList().subscribe((res:any)=>{
    console.log(res)
    this.menuList=res
  })
}
edit(id){
  console.log(id)
  this.route.navigate([`menu/edit-menu/${id}`])
}
delete(id){
  this.dbioService.deleteMenusList(id).subscribe((res:any)=>{
    this.getMenuList()
  })
}

}
