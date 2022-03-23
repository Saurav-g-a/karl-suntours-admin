import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-homepage-sections',
  templateUrl: './homepage-sections.component.html',
  styleUrls: ['./homepage-sections.component.scss']
})
export class HomepageSectionsComponent implements OnInit {
  homepage:any
  constructor(
    private dbioService:DbioService,
    private activatedRoute : ActivatedRoute, 
    private router:Router
  ) { }

  ngOnInit(): void {
    this.dbioService.getHomePage().subscribe(res=>{
      this.homepage  = res
    })
  }
  edit(id){
    this.router.navigate(['homepage/update-section/'+id])
  }

}
