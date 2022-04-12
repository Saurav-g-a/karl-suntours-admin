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
  imageUrl=''
  subsections:{ "title": string,
  "description": string,
  "image": string,
  "percentage": string}[]=[]

  ngOnInit(): void {
  }

  addSection(res:any){
    this.subsections.push({
      "title": "",
      "description": "",
      "image": res,
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
          if(i=='section'){
            _this.section['background']=res.url
          }
          else{
        _this.subsections[i]['image']=res.url
          }
        })
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
  
  }
}
