import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-meta-data',
  templateUrl: './meta-data.component.html',
  styleUrls: ['./meta-data.component.scss']
})
export class MetaDataComponent implements OnInit {
  meta:any={}
  type:any=''
  constructor(
    private dbioService:DbioService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  

  ngOnInit(): void {
    this.type = this.activatedRoute.snapshot.params.type
    this.dbioService.getPageMeta(this.type).subscribe(res=>{
      this.meta = res
      console.log(this.meta)
    })
  }


  submit(){
  
    this.dbioService.updateMetaData(this.meta).subscribe(res=>{
      this.router.navigate(['metadata/list'])
    })
  }
}
