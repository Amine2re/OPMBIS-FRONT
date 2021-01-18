import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlBooks } from './BooksUrlRepository/url-books';

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {

  urlBooks:UrlBooks;
  uriDaily:String="http://localhost:8080/book/findByDaily"
  uriWeekly:String="http://localhost:8080/book/findByWeekly"
  uriQuartly:String="http://localhost:8080/book/findByQuartly"
  uriYearly:String="http://localhost:8080/book/findByYearly"
  uriAuthor:String="http://localhost:8080/getAuthor"

  constructor(private HTTP:HttpClient ) {

   }

    getDailyPurchaseBook(idWarehouse:number,date:any){
      return this.HTTP.get(`${this.uriDaily}/${idWarehouse}/${date}`);
    }
    getWeeklyPurchaseBook(idWarehouse:number,date:any,week:number){
      return this.HTTP.get(`${this.uriWeekly}/${idWarehouse}/${date}/${week}`);
    }
    getQuartlyPurchaseBook(idWarehouse:number,date:any,trimestre:number){
      return this.HTTP.get(`${this.uriQuartly}/${idWarehouse}/${date}/${trimestre}`);
    }
    getYearlyPurchaseBook(idWarehouse:number,dateInit:any,dateFinal:any){
      return this.HTTP.get(`${this.uriYearly}/${idWarehouse}/${dateInit}/${dateFinal}`);
    }
    getAuthor(idAuthor:number){
      return this.HTTP.get(`${this.uriAuthor}/${idAuthor}`);
    }

}
