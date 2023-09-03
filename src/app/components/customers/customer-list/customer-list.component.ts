import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { CustomerData } from 'src/app/interfaces/interfaces';



@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnChanges{
  @Input() customerData: CustomerData[] = [];
  dataSource: CustomerData[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = this.customerData;
  }

  displayedColumns: string[] = ['name', 'vorname', 'hund', 'buttons'];

}
