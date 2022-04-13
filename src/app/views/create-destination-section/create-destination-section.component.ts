import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-create-destination-section',
  templateUrl: './create-destination-section.component.html',
  styleUrls: ['./create-destination-section.component.scss']
})
export class CreateDestinationSectionComponent implements OnInit {
  
  constructor(
    private dbioService:DbioService,
    private router:Router
  ) {}

  slides:string[]=[]
  destination={
    title:"",
    shownOnDashboard:false,
    canonical:'',
    metaDescription:'',
    metaTitle:''
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
    this.destination['slides']=this.slides
    this.dbioService.createDestination(this.destination).subscribe(res=>{
      this.router.navigate(['destination/destinations'])
    })
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
            console.log(i)
            _this.slides[i]=res.url
          }
  
        })
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
  
  }
}
