import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit, Input } from '@angular/core';
import { BookServicesService } from '../services/book-services.service';
import { UrlBooks } from '../services/BooksUrlRepository/url-books';
import { GoodServicesService } from '../services/good-services.service';

@Component({
  selector: 'app-books',
  templateUrl: './bookGood.component.html',
  styleUrls: ['./bookGood.component.css']
})
export class BookGoodComponent implements OnInit {

  currentValue:number;
  urlBooks:UrlBooks;
  resultBookFound:any;
  resultGoodFound:any;
  signeA:string;
  signeW:string;
  signeG:string;
  positif:string="+";
  negatif:string="-";
  printA:boolean=false;
  printW:boolean=false;
  printG:boolean=false;
  dateFoundDaily:string;
  dateFoundWeekly:string;
  dateFoundYearly:string;
  dateFoundQuartly:string;
  daily:boolean=false
  weekly=false
  quartly=false
  yearly=false
  idWarehouse:number
  date:string;
  idSelected:number;
  idSelectedWeekly:number;
  idSelectedQuartly:number;
  idSelectedYearly:number=null;
  weekSelected:number;
  trimSelected:number;
  smsReturn:string;
  dateFoundYearlyFinal:any=null;
  dateFoundYearlyInit:any=null;
  dateInit:any;
  dateFinal:any;
  book:boolean=false;
  good:boolean=true;
  letsGo:boolean=true;
  getValueList:string;
  testCheck:boolean=false;
  keyword:string="good";
  smsField: string;
  result:string;
 
  


  constructor( private bookService : BookServicesService , private http:HttpClient , private goodService:GoodServicesService ) {
   // this.testData(1,"2021-01-29");
    //console.log(this.dateFound);
    
   }

   getEvent(value:string){
     
  if(value=="daily"){
    this.idWarehouse=1;
    this.daily=true    
    this.weekly=false
    this.quartly=false
    this.yearly=false
    this.resultBookFound=null
    this.resultGoodFound=null
  
  }
  else if(value=="weekly"){
    
    this.weekly=true
    this.daily=false
    this.quartly=false
    this.yearly=false
    this.resultBookFound=null
    this.resultGoodFound=null
  }
  else if(value=="quartly"){
    
    this.quartly=true
    this.daily=false
    this.weekly=false    
    this.yearly=false
    this.resultBookFound=null
    this.resultGoodFound=null
  }
  else if(value=="yearly"){
    
    this.yearly=true
    this.daily=false
    this.weekly=false
    this.quartly=false    
    this.resultBookFound=null
    this.resultGoodFound=null
  }
     
   }

   searchResultForDaily(){
    if(this.idSelected==null||this.dateFoundDaily==null){
        this.smsField="all fields are required"
    }else{
      if(this.keyword=="book"){
        this.dailyPurchase(this.idSelected,this.dateFoundDaily);
        this.smsField=""
        
      }
        else if(this.keyword=="good"){
        this.dailyPurchaseG(this.idSelected,this.dateFoundDaily)
        this.smsField=""
        
      }
        
    }            
   }

   searchResultForWeekly(){
     
    if(this.idSelectedWeekly==null||this.dateFoundWeekly==null || this.weekSelected==null){
      this.smsField="all fields are required"
        
    }else{
       
        if(this.keyword=="book"){
          this.WeeklyPurchase(this.idSelectedWeekly,this.dateFoundWeekly,this.weekSelected);
          this.smsField=""
          this.smsReturn=null
        }
          else if(this.keyword=="good"){
          this.WeeklyPurchaseG(this.idSelectedWeekly,this.dateFoundWeekly,this.weekSelected)
          this.smsField=""
          
          
        }
        
    }            
   }
   searchResultForQuartly(){
    if(this.idSelectedQuartly==null||this.dateFoundQuartly==null || this.trimSelected==null){
      this.smsField="all fields are required"
    }else{
        
        if(this.keyword=="book"){
          this.QuartlyPurchase(this.idSelectedQuartly,this.dateFoundQuartly,this.trimSelected);
          this.smsField=""
        }
          else if(this.keyword=="good"){
            
            
        var  retour:any= this.QuartlyPurchaseG(this.idSelectedQuartly,this.dateFoundQuartly,this.trimSelected)[0].value
        console.log(retour);
          
        this.smsField=""
          
        }
    }            
   }
   searchResultForYearly(){
    if(this.idSelectedYearly==null || this.dateFoundYearlyInit ==null || this.dateFoundYearlyFinal==null){
      this.smsField="all fields are required"
      
    }else{
      
      if(this.keyword=="book"){
        this.YearlyPurchase(this.idSelectedYearly,this.dateFoundYearlyInit,this.dateFoundYearlyFinal);        
        this.smsField=""
      }
        else if(this.keyword=="good"){
        this.YearlyPurchaseG(this.idSelectedYearly,this.dateFoundYearlyInit,this.dateFoundYearlyFinal)
        this.smsField=""
        
      }
    }
        
  }

  ngOnInit() {
    this.signeA = this.signeW =  this.positif;  
  }

 

  go(e){
    if(e.target.checked==true){
      this.keyword="book";
      this.book=true;
      this.good=false;
      
    }else{
      this.keyword="good";
      this.book=false;
      this.good=true;
      
    }
  }

  letsGoA(){
    
    this.printA=!this.printA;
    if(!this.printA) this.signeA = this.positif
    else this.signeA = this.negatif
   
  }

  letsGoG(){
    
    this.printG=!this.printG;
    if(!this.printG) this.signeG = this.positif
    else this.signeG = this.negatif
   
  }

  letsGoW(){
    
    this.printW=!this.printW;
    if(!this.printW) this.signeW = this.positif
    else this.signeW = this.negatif
   
  }

  dailyPurchase(idWarehouse:number,date:string){ 
    this.bookService.getDailyPurchaseBook(idWarehouse,date).subscribe(
        resp=>{          
          this.resultBookFound = resp;             
        },
        error=>{                    
          console.log(error);        
        }
    );
  }

  WeeklyPurchase(idWarehouse:number,date:string,week:number){ 
    this.bookService.getWeeklyPurchaseBook(idWarehouse,date,week).subscribe(
        resp=>{
          this.resultBookFound = resp;            
        },
        error=>{                    
          console.log(error);        
        }
    );
  }

  QuartlyPurchase(idWarehouse:number,date:string,trimestre:number){ 
    this.bookService.getQuartlyPurchaseBook(idWarehouse,date,trimestre).subscribe(
        resp=>{
          this.resultBookFound = resp;    
          if(this.resultBookFound==null){
            this.result="resultat non trouvé !"
          }        else{
            this.result=""
          } 
        },
        error=>{                    
          console.log(error);        
        }
    );
  }

   YearlyPurchase(idWarehouse:number,dateInit:string,dateFinal:string){ 
    this.bookService.getYearlyPurchaseBook(idWarehouse,dateInit,dateFinal).subscribe(
        resp=>{
          this.resultBookFound = resp;                 
        },
        error=>{                    
          console.log(error);        
        }
    );
  }

  dailyPurchaseG(idWarehouse:number,date:string){
    
   this.goodService.getDailyPurchaseGood(idWarehouse,date).subscribe(
    resp=>{
      this.resultGoodFound = resp;              
    },
    error=>{                    
      console.log(error);        
    }
);
   
  }

  WeeklyPurchaseG(idWarehouse:number,date:string,week:number){ 
    this.goodService.getWeeklyPurchaseGood(idWarehouse,date,week).pipe(resp=>resp).subscribe(
        resp=>{
          this.resultGoodFound = resp;   
                  
        },
        error=>{                    
          console.log(error);        
        }
    );
  }

  QuartlyPurchaseG(idWarehouse:number,date:string,trimestre:number){ 
    this.goodService.getQuartlyPurchaseGood(idWarehouse,date,trimestre).subscribe(
        resp=>{
          this.resultGoodFound = resp;                
        },
        error=>{                    
          console.log(error);        
        }
    );
  }

  YearlyPurchaseG(idWarehouse:number,dateInit:string,dateFinal:string){ 
    this.goodService.getYearlyPurchaseGood(idWarehouse,dateInit,dateFinal).subscribe(
        resp=>{
          this.resultGoodFound = resp;                   
        },
        error=>{                    
          console.log(error);        
        }
    );
  }

}

  
  

   
  
