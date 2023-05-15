import { Component, OnInit } from '@angular/core';
export interface Sales {
  region: string;
  sales: number;
}

const SALES_DATA: Sales[] = [
  {region: 'North America', sales: 2000},
  {region: 'Europe', sales: 1500},
  {region: 'Asia', sales: 1000},
  {region: 'South America', sales: 500},
  {region: 'Australia', sales: 250}
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['region', 'sales'];
  salesData = SALES_DATA;

}
