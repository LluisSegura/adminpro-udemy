import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  
  @Input('chartLabels') doughnutchartLabels: string[] = [];
  @Input('chartData') doughnutchartData: number[] = [];
  @Input('chartType') doughnutchartType: string = '';
  constructor() { }

  ngOnInit() {
  }

}
