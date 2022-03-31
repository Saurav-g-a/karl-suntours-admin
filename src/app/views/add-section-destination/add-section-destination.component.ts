import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-add-section-destination',
  templateUrl: './add-section-destination.component.html',
  styleUrls: ['./add-section-destination.component.scss']
})
export class AddSectionDestinationComponent implements OnInit {
  destinationId=''
  constructor(
    private dbioService:DbioService,
    private router:Router,
    private activatedRoute : ActivatedRoute,
  ) {}
  sections={ 
    "title": "",
    "description": "",
    "image": "",
    "percentage": "",
    "type":"",
    "destination":""
  }
  subsections:{ 
    "title": string,
    "description": string,
    "image": string,
    "percentage": string,
    "type":string
  }[]=[]
  ngOnInit(): void {
    this.destinationId = this.activatedRoute.snapshot.params.id
  }

  submit(){
    this.sections['destination'] = this.destinationId
    this.sections['sections'] = this.subsections
    this.dbioService.createDestinationSection(this.sections).subscribe(res=>{
      this.router.navigate(['destination/destination-section-list/'+this.destinationId])
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
}
