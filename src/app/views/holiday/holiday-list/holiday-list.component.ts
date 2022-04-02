import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.scss']
})
export class HolidayListComponent implements OnInit {

  holidays:any=[]
  constructor(
    private dbioService:DbioService,
    private activatedRoute : ActivatedRoute, 
    private router:Router
  ) { }

  ngOnInit(): void {
    this.dbioService.getAllHolidays().subscribe(res=>{
      this.holidays  = res
    })
  }
  edit(id){
    this.router.navigate(['holiday/update-holiday/'+id])
  }
  add(id){
    this.router.navigate(['holiday/create-holiday-section/'+id])
  }
  see(id){
    this.router.navigate(['holiday/holiday-section-list/'+id])
  }

}
