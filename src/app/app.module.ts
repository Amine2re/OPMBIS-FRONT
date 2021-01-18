import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { MatButtonModule } from '@angular/material';

import { MatSliderModule } from '@angular/material/slider';

import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PurchaseComponent } from './purchase/purchase.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { OtherReportsComponent } from './other-reports/other-reports.component';
import { BookGoodComponent } from './bookGood/bookGood.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

const MatCompponents = {
  MatButtonModule
}

const myRoutes : Routes =[
  { path:'acceuil' , component: AcceuilComponent } , 
  { path:'purchase' , component: PurchaseComponent } , 
  { path:'otherReports' , component: OtherReportsComponent } , 
  { path:'bookGood' , component: BookGoodComponent } ,
  { path:'statistiques' , component: StatistiquesComponent } ,
  { path:'' , component:AcceuilComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PurchaseComponent,
    AcceuilComponent,
    OtherReportsComponent,
    BookGoodComponent,
    StatistiquesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    RouterModule.forRoot(myRoutes),
    MatToolbarModule,
    HttpClientModule,
    ReactiveFormsModule
    
  
   
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
