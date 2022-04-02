import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-update-holiday-section',
  templateUrl: './update-holiday-section.component.html',
  styleUrls: ['./update-holiday-section.component.scss']
})
export class UpdateHolidaySectionComponent implements OnInit {

  holidayId=''
  subsections=[]
  constructor(
    private dbioService:DbioService,
    private router:Router,
    private activatedRoute : ActivatedRoute,
  ) {}
  sections:any={ 
    "title": "",
    "description": "",
    "image": "",
    "percentage": "",
    "type":"",
    "destination":""
  }
  sectionId=''
  ngOnInit(): void {
    this.holidayId = this.activatedRoute.snapshot.params.id
    this.sectionId = this.activatedRoute.snapshot.params.sectionId
    this.dbioService.getHolidaySection(this.sectionId).subscribe(res=>{
      this.sections = res
      this.subsections = res['sections']
    })
  }
  addSection(){
    this.subsections.push({
      "title": "",
      "description": "",
      "image": "",
      "percentage": "",
      "type":""
    })
  }
  deleteSection(i){
    console.log(i)
    this.subsections.splice(i,1)
  }
  submit(){
  this.sections['sections']=this.subsections

    this.sections['holiday'] = this.holidayId
    this.dbioService.updateHolidaySection(this.sections).subscribe(res=>{
      this.router.navigate(['holiday/holiday-section-list/'+this.holidayId])
    })
  }
}
