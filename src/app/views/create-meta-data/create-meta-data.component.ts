import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-create-meta-data',
  templateUrl: './create-meta-data.component.html',
  styleUrls: ['./create-meta-data.component.scss']
})
export class CreateMetaDataComponent implements OnInit {

  constructor(
    private dbioService:DbioService,
    private router:Router
  ) { }

  meta:any={
   
    metaTitle:"",
    metaDescription:"",
    canonical:"",
    type:"homepage"
   
  }

  ngOnInit(): void {
    this.getMetaData()
  }

getMetaData(){
this.dbioService.getHomePageMeta().subscribe((res:any)=>{
   this.meta={...res}

})
}
  submit(){
  console.log(this.meta)
  this.dbioService.homePageMeta(this.meta).subscribe((res:any)=>{
    this.router.navigate(['/destination/destinations'])
  }
  )
  }

}
