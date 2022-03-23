import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-create-homepage-section',
  templateUrl: './create-homepage-section.component.html',
  styleUrls: ['./create-homepage-section.component.scss']
})
export class CreateHomepageSectionComponent implements OnInit {

  constructor(
    private dbioService:DbioService,
    private router:Router
  ) { }

  section={
    background:"",
    title:"",
    metatitle:"",
    metadescription:"",
    type:"",
    description1:"",
    description2:""
  }

  subsections:{ "title": string,
  "description": string,
  "image": string,
  "percentage": string}[]=[]

  ngOnInit(): void {
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
    this.dbioService.createHomepageSection(this.section).subscribe(res=>{
      this.router.navigate(['homepage/update-section/'+res['id']])
    })
  }
}
