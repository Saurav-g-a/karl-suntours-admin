import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbioService {

  constructor(private http : HttpClient) { }

  createHomepageSection(section){
    return this.http.post(environment.url+"/homepage/createSection",section)
  }

  getHomepageSection(id){
    return this.http.get(environment.url+"/homepage/section/"+id)
  }
 
  updateHomepageSection(data){
    return this.http.post(environment.url+"/homepage/updateSection",data)
  }
  getHomePage(){
      return this.http.get(environment.url+"/homepage/sections")
  }


  getPageMeta(type){
    return this.http.get(environment.url+"/pagemeta/"+type)
  }
 updateMetaData(meta){
    return this.http.post(environment.url+"/pagemeta/updateMeta",meta)
  }

  createMetaData(meta){
    return this.http.post(environment.url+"/pagemeta/createMeta",meta)
  }
  getAllMeta(){
    return this.http.get(environment.url+"/pagemeta/list")
  }



  createDestination(section){
    return this.http.post(environment.url+"/destination/create",section)
  }
  getDestination(id){
    return this.http.get(environment.url+"/destination/"+id)
  }
  updateDestination(data){
    return this.http.post(environment.url+"/destination/update",data)
  }
  getAllDestinations(){
      return this.http.get(environment.url+"/destination/list")
  }
  createDestinationSection(data){
    return this.http.post(environment.url+"/destination/addsection",data)
  }
  getDestinationSections(data){
    return this.http.get(environment.url+"/destination/"+data+"/sections")
  }
  getDestinationSection(data){
    return this.http.get(environment.url+"/destination/section/"+data)
  }
  updateDestinationSection(data){
    return this.http.post(environment.url+"/destination/updateSection/",data)
  }



  createHoliday(section){
    return this.http.post(environment.url+"/holiday/create",section)
  }
  getHoliday(id){
    return this.http.get(environment.url+"/holiday/"+id)
  }
  updateHoliday(data){
    return this.http.post(environment.url+"/holiday/update",data)
  }
  getAllHolidays(){
      return this.http.get(environment.url+"/holiday/list")
  }
  createHolidaySection(data){
    return this.http.post(environment.url+"/holiday/addsection",data)
  }
  getHolidaySections(data){
    return this.http.get(environment.url+"/holiday/"+data+"/sections")
  }
  getHolidaySection(data){
    return this.http.get(environment.url+"/holiday/section/"+data)
  }
  updateHolidaySection(data){
    return this.http.post(environment.url+"/holiday/updateSection/",data)
  }
}
