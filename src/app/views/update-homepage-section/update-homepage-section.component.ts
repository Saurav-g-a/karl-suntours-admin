import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  imageBase64='';
  subSectionImage:''
  constructor(
    private dbioService:DbioService,
    private activatedRoute : ActivatedRoute,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.sectionId = this.activatedRoute.snapshot.params.id
    this.dbioService.getHomepageSection(this.sectionId).subscribe(res=>{
      this.section = res
      this.subsections = res['sections']
    })
  }
  addSection(res:any){
    this.subsections.push({
      "title": "",
      "description": "",
      "image":'',
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
      if(res){
        this.router.navigate(['/homepage/sections'])
      }
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
