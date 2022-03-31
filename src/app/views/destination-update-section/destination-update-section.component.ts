import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-destination-update-section',
  templateUrl: './destination-update-section.component.html',
  styleUrls: ['./destination-update-section.component.scss']
})
export class DestinationUpdateSectionComponent implements OnInit {

  destinationId=''
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
    this.destinationId = this.activatedRoute.snapshot.params.id
    this.sectionId = this.activatedRoute.snapshot.params.sectionId
    this.dbioService.getDestinationSection(this.sectionId).subscribe(res=>{
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

    this.sections['destination'] = this.destinationId
    this.dbioService.updateDestinationSection(this.sections).subscribe(res=>{
      this.router.navigate(['destination/destination-section-list/'+this.destinationId])
    })
  }
}
