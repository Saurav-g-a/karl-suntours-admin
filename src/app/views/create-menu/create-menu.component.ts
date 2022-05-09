import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.scss']
})
export class CreateMenuComponent implements OnInit {
  menuId:any=''
  pageTitle:any=''
  constructor(
    private dbioService:DbioService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  menu={
    title:"",
    image:""
  }

  subMenus:{ 
    title:""
  }[]=[]

  ngOnInit(): void {
    this.menuId=this.route.snapshot.params.id
    if(this.menuId){
      this.getDataById(this.menuId)
      this.pageTitle='Edit Menu'
    }
    else{
      this.pageTitle='Add Menu'
    }
  }

  addSubMenu(res:any){
    this.subMenus.push({
      "title":""
    })
  }
  deleteSubMenu(i){
    console.log(i)
    this.subMenus.splice(i,1)
  }
  submit(){
    this.menu['subMenus']=this.subMenus
    this.dbioService.createMenu(this.menu).subscribe((res:any)=>{
      console.log(res)
      if(res.id){
        this.router.navigate(['/menu/menuList'])
      }
      // this.router.navigate(['homepage/sections'])
    })
  }
  fileChangeEvent(event){
    let _this=this
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        // me.modelvalue = reader.result;
        console.log(reader.result);
        let data={
          data:reader.result,
          fileName:file.name  
        }
        _this.dbioService.uploadImage(data).subscribe((res:any)=>{
          console.log(res)
          // _this.section['background']=res.url       
            _this.menu['image']=res.url
        })
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
  
  }
  getDataById(id){
this.dbioService.getMenuById(id).subscribe((res:any)=>{
  console.log(res)
  this.menu={...res}
  this.subMenus=[...res.subMenus]
})
  }
  editSubmit(){
    this.menu['subMenus']=this.subMenus
    this.menu['id']=this.menuId
    console.log(this.menu)
    this.dbioService.editMenu(this.menu).subscribe((res:any)=>{
      console.log(res)
      if(res.id){
        this.router.navigate(['/menu/menuList'])
      }
    })
  }
}
