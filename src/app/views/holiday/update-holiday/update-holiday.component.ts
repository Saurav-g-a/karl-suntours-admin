import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-update-holiday',
  templateUrl: './update-holiday.component.html',
  styleUrls: ['./update-holiday.component.scss']
})
export class UpdateHolidayComponent implements OnInit {

  holidayId=""
  holiday:any={}
  subsections=[]
  slides=[]
  constructor(
    private dbioService:DbioService,
    private activatedRoute : ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.holidayId = this.activatedRoute.snapshot.params.id
    this.dbioService.getHoliday(this.holidayId).subscribe(res=>{
      this.holiday = res
      //this.subsections = res['sections']
      this.slides = res['slides']
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
    //this.destination['sections']=this.subsections
    this.holiday['slides']=this.slides
    this.dbioService.updateHoliday(this.holiday).subscribe(res=>{
      console.log(res)
      this.holiday = res
      this.subsections = res['sections']
      this.slides = res['slides']
    })
  }
  addSlide(){
    this.slides.push("")
  }
  deleteSlide(i){
    console.log(i)
    this.slides.splice(i,1)
  }

}
