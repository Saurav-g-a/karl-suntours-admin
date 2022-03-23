import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-update-homepage-section',
  templateUrl: './update-homepage-section.component.html',
  styleUrls: ['./update-homepage-section.component.scss']
})
export class UpdateHomepageSectionComponent implements OnInit {
  sectionId=""
  section={}
  subsections=[]
  constructor(
    private dbioService:DbioService,
    private activatedRoute : ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.sectionId = this.activatedRoute.snapshot.params.id
    this.dbioService.getHomepageSection(this.sectionId).subscribe(res=>{
      this.section = res
      this.subsections = res['sections']
    })
  }
  addSection(){
    this.subsections.push({
      "title": "",
      "description": "",
      "image": "",
      "percentage": ""
    })
  }
  deleteSection(i){
    console.log(i)
    this.subsections.splice(i,1)
  }
  submit(){
    this.section['sections']=this.subsections
    this.dbioService.updateHomepageSection(this.section).subscribe(res=>{
      this.section = res
      this.subsections = res['sections']
    })
  }
}
