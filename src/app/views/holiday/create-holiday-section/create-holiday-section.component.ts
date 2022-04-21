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
      "image": '',
      "percentage": "",
      "type":""
    })
  }
  // fileChangeEvent(event,i){
  //   let _this=this
  //     let file = event.target.files[0];
  //     _this.dbioService.uploadImage(file).subscribe((res:any)=>{
  //       console.log(i)
  //       if(i==='section'){
  //         _this.sections['image']=res.url
  //       }
  //       else{
  //         _this.subsections[i]['image']=res.url
  //       }
  //     })
  //     let reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = function () {
  //       //me.modelvalue = reader.result;
  //       console.log(reader.result);
  //       // let data={ 
  //       //   imageUrl:reader.result
  //       // }
  
  //     };
  //     reader.onerror = function (error) {
  //       console.log('Error: ', error);
  //     };
  
  // }
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
          if(i==='section'){
            _this.sections['image']=res.url
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
