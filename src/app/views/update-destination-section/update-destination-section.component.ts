import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  image:string=''
  constructor(
    private dbioService:DbioService,
    private activatedRoute : ActivatedRoute,
    private route:Router

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
      if(res){
        this.route.navigate(['/destination/destinations'])
      }
    })
  }
  addSlide(){
    this.slides.push("")
  }
  fileChangeEvent(event,i){
    let _this=this
      let file = event.target.files[0];
      console.log(file)

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        // me.modelvalue = reader.result;
        console.log(reader.result);
        let data={
          data:reader.result,
          fileName:file.name  
        }
        _this.dbioService.uploadImage(data).subscribe((res:any)=>{
          console.log(res)
          // _this.section['background']=res.url
         if(res.url){
        //  _this.slides.push(res.url)
        _this.slides[i]=res.url
         }
        })
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
  
  }
  deleteSlide(i){
    console.log(i)
    this.slides.splice(i,1)
  }
}
