import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GoodServicesService {

  


  
  uriDaily:String="http://localhost:8080/good/findByDaily"
  uriWeekly:String="http://localhost:8080/good/findByWeekly"
  uriQuartly:String="http://localhost:8080/good/findByQuartly"
  uriYearly:String="http://localhost:8080/good/findByYearly"

  constructor(private HTTP:HttpClient ) {

   }

    getDailyPurchaseGood(idWarehouse:number,date:any){
      return this.HTTP.get(`${this.uriDaily}/${idWarehouse}/${date}`);
    }
    getWeeklyPurchaseGood(idWarehouse:number,date:any,week:number){
      return this.HTTP.get(`${this.uriWeekly}/${idWarehouse}/${date}/${week}`);
    }
    getQuartlyPurchaseGood(idWarehouse:number,date:any,trimestre:number){
      return this.HTTP.get(`${this.uriQuartly}/${idWarehouse}/${date}/${trimestre}`);
    } 
    getYearlyPurchaseGood(idWarehouse:number,dateInit:any,dateFinal:any){
      return this.HTTP.get(`${this.uriYearly}/${idWarehouse}/${dateInit}/${dateFinal}`);
    }


}
