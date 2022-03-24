import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-update-destination-section',
  templateUrl: './update-destination-section.component.html',
  styleUrls: ['./update-destination-section.component.scss']
})
export class UpdateDestinationSectionComponent implements OnInit {

  destinationId=""
  destination:any={}
  subsections=[]
  slides=[]
  constructor(
    private dbioService:DbioService,
    private activatedRoute : ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.destinationId = this.activatedRoute.snapshot.params.id
    this.dbioService.getDestination(this.destinationId).subscribe(res=>{
      this.destination = res
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
    this.destination['slides']=this.slides
    this.dbioService.updateDestination(this.destination).subscribe(res=>{
      console.log(res)
      this.destination = res
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
