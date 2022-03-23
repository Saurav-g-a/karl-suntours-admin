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
   
    metatitle:"",
    metadescription:"",
    type:"",
    canonical:"",
   
  }

  ngOnInit(): void {
  }


  submit(){
  
    this.dbioService.createMetaData(this.meta).subscribe(res=>{
      this.router.navigate(['homepage/update-section/'+res['id']])
    })
  }

}
