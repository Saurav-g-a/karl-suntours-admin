import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-add-section-destination',
  templateUrl: './add-section-destination.component.html',
  styleUrls: ['./add-section-destination.component.scss']
})
export class AddSectionDestinationComponent implements OnInit {
  destinationId=''
  imageUrl=''
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
    this.destinationId = this.activatedRoute.snapshot.params.id
  }

  submit(){
    this.sections['destination'] = this.destinationId
    this.sections['sections'] = this.subsections
    this.dbioService.createDestinationSection(this.sections).subscribe(res=>{
      this.router.navigate(['destination/destination-section-list/'+this.destinationId])
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
  // fileChangeEvent(event,type){
  //   let _this=this
  //     let file = event.target.files[0];
  //     console.log(file.file)
  //     _this.dbioService.uploadImage(event.target).subscribe((res:any)=>{
  //       console.log(res)
  //       if(type=='section'){
  //         this.sections.image=res
  //       }
  //       else{
  //         this.addSection(res)
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
          // _this.section['background']=res.url
          if(i=='section'){
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
