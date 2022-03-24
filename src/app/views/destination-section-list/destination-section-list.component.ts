import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-destination-section-list',
  templateUrl: './destination-section-list.component.html',
  styleUrls: ['./destination-section-list.component.scss']
})
export class DestinationSectionListComponent implements OnInit {
  sections:any=[]
  destinationId=''
  constructor(
    private dbioService:DbioService,
    private activatedRoute : ActivatedRoute, 
    private router:Router
  ) { }

  ngOnInit(): void {
    this.destinationId =  this.activatedRoute.snapshot.params.id
     this.dbioService.getDestinationSections(this.destinationId).subscribe(res=>[
      this.sections =res
     ])
  }
  edit(id){
    this.router.navigate(['destination/'+this.destinationId+'/section/'+id])
  }
  add(){
    this.router.navigate(['destination/add-section-destination/'+this.destinationId+'/'])
  }
}
