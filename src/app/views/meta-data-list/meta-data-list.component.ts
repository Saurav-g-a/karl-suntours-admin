import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-meta-data-list',
  templateUrl: './meta-data-list.component.html',
  styleUrls: ['./meta-data-list.component.scss']
})
export class MetaDataListComponent implements OnInit {

  metaList:any=[]
  constructor(
    private dbioService:DbioService,
    private activatedRoute : ActivatedRoute, 
    private router:Router
  ) { }

  ngOnInit(): void {
    this.dbioService.getAllMeta().subscribe(res=>{
      this.metaList  = res
    })
  }
  edit(type){
    this.router.navigate(['metadata/'+type])
  }

}
