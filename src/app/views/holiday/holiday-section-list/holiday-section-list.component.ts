import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbioService } from 'src/app/services/dbio.service';

@Component({
  selector: 'app-holiday-section-list',
  templateUrl: './holiday-section-list.component.html',
  styleUrls: ['./holiday-section-list.component.scss']
})
export class HolidaySectionListComponent implements OnInit {

  sections: any = []
  holidayId = ''
  constructor(
    private dbioService: DbioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.holidayId = this.activatedRoute.snapshot.params.id
    this.sectionList()
  }
  sectionList() {
    this.dbioService.getHolidaySections(this.holidayId).subscribe(res => [
      this.sections = res
    ])
  }
  edit(id) {
    this.router.navigate(['holiday/' + this.holidayId + '/section/' + id])
  }
  add() {
    this.router.navigate(['holiday/create-holiday-section/' + this.holidayId + '/'])
  }
  delete(id) {
    this.dbioService.deleteHolidayPageSection(id).subscribe((res:any)=>{
      console.log(res)
      if (res){
        this.sectionList()
      }
    })
 
  }
}
