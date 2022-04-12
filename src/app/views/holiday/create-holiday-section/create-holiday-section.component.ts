import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-create-holiday-section',
  templateUrl: './create-holiday-section.component.html',
  styleUrls: ['./create-holiday-section.component.scss']
})
export class CreateHolidaySectionComponent implements OnInit {
  holidayId=''
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
    this.holidayId = this.activatedRoute.snapshot.params.id
  }

  submit(){
    this.sections['holiday'] = this.holidayId
    this.sections['destination'] = ""
    this.sections['sections'] = this.subsections
    this.dbioService.createHolidaySection(this.sections).subscribe(res=>{
      this.router.navigate(['holiday/holiday-section-list/'+this.holidayId])
    })
  }
  addSection(res:any){
    this.subsections.push({
      "title": "",
      "description": "",
      "image": res,
      "percentage": "",
      "type":""
    })
  }
  fileChangeEvent(event,type){
    let _this=this
      let file = event.target.files[0];
      console.log(file.file)
      _this.dbioService.uploadImage(event.target).subscribe((res:any)=>{
        console.log(res)
        if(type=='section'){
          this.sections.image=res
        }
        else{
          this.addSection(res)
        }
      })
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        //me.modelvalue = reader.result;
        console.log(reader.result);
        // let data={
        //   imageUrl:reader.result
        // }
  
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
  
  }
}
