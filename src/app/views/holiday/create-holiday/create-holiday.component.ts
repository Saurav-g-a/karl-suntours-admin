import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-create-holiday',
  templateUrl: './create-holiday.component.html',
  styleUrls: ['./create-holiday.component.scss']
})
export class CreateHolidayComponent implements OnInit {

  constructor(
    private dbioService:DbioService,
    private router:Router
  ) {}

  slides:string[]=[]
  holiday={
    title:"",
    type:"",
    metaTitle:'',
    metaDescription:'',
    canonical:''
  }

  subsections:{ 
    "title": string,
    "description": string,
    "image": string,
    "percentage": string,
    "type":string
  }[]=[]


  ngOnInit(): void {
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
  addSlide(){
    this.slides.push("")
  }
  deleteSlide(i){
    this.slides.splice(i,1)
  }
  deleteSection(i){
    this.subsections.splice(i,1)
  }
  submit(){
    //this.destination['sections']=this.subsections
    this.holiday['slides']=this.slides
    this.dbioService.createHoliday(this.holiday).subscribe(res=>{
      this.router.navigate(['holiday/holidays'])
    })
  }

}
