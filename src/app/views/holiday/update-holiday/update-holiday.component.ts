import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-update-holiday',
  templateUrl: './update-holiday.component.html',
  styleUrls: ['./update-holiday.component.scss']
})
export class UpdateHolidayComponent implements OnInit {

  holidayId=""
  holiday:any={}
  subsections=[]
  slides=[]
  constructor(
    private dbioService:DbioService,
    private activatedRoute : ActivatedRoute,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.holidayId = this.activatedRoute.snapshot.params.id
    this.dbioService.getHoliday(this.holidayId).subscribe(res=>{
      this.holiday = res
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
    this.holiday['slides']=this.slides
    this.dbioService.updateHoliday(this.holiday).subscribe(res=>{
      console.log(res)
      this.holiday = res
      this.subsections = res['sections']
      this.slides = res['slides']
      if(res){
        this.router.navigate(['/holiday/holidays'])
      }
    })
  }
  addSlide(){
    this.slides.push("")
  }
  deleteSlide(i){
    console.log(i)
    this.slides.splice(i,1)
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
}
