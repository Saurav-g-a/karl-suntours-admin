import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  destinations:any=[]
  constructor(
    private dbioService:DbioService,
    private activatedRoute : ActivatedRoute, 
    private router:Router
  ) { }

  ngOnInit(): void {
    this.dbioService.getAllDestinations().subscribe(res=>{
      this.destinations  = res
    })
  }
  edit(id){
    this.router.navigate(['destination/update-destination/'+id])
  }
  add(id){
    this.router.navigate(['destination/add-section-destination/'+id])
  }
  see(id){
    this.router.navigate(['destination/destination-section-list/'+id])
  }
}
