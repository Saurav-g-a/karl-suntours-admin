import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-update-meta-destination-section',
  templateUrl: './update-meta-destination-section.component.html',
  styleUrls: ['./update-meta-destination-section.component.scss']
})
export class UpdateMetaDestinationSectionComponent implements OnInit {

  destinationId=""
  constructor( private activatedRoute : ActivatedRoute,private route:Router,private dbioservice:DbioService) { }

  ngOnInit(): void {
    this.destinationId = this.activatedRoute.snapshot.params.id
    if(this.destinationId){
      this.getMetaData()
    }
  }
  metaData={
    canonical:'',
    metaDescription:'',
    metaTitle:''
  }
  submit(){
    console.log(this.metaData)
    this.metaData['id']=this.destinationId
    this.dbioservice.updateDestinationMetaData(this.metaData).subscribe((res:any)=>{
      console.log(res)
      if(res){
        this.route.navigate(['/destination/destinations'])
      }
    })
  }

  getMetaData(){
    this.dbioservice.getDestinationMetaData(this.destinationId).subscribe((res:any)=>{
      console.log(res)
      this.metaData={...res}
    })
  }
}
