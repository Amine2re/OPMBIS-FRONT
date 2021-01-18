import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

  data = {
    datasets: [{
        data: [10, 20, 30,40,50,60,70]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Daily',
        'Weekly',
        'Monthly',
        'Quarterly',
        'Yearly',
        'Goods',
        'Books',
        'Others'
    ]
};
  

  constructor() {
   
   }

  
  ngOnInit() {
    //this.goChart();S

    new Chart("MyChart", {
     
      data: this.data,
      type: 'polarArea',
      options:  {
        scales: {
          xAxes: [{
              stacked: true
          }],
          yAxes: [{
              stacked: true
          }]
       }
    }
  });
  }

  

  goChpart(){
    var stackedBar = new Chart("MyChart", {
      type: 'bar',
      data: this.data,
      options: {
          scales: {
              xAxes: [{
                  stacked: true
              }],
              yAxes: [{
                  stacked: true
              }]
          }
      }
  });
  }
}
