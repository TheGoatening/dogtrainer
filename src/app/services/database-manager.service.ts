// import { Injectable } from '@angular/core';
// import { Database } from "sqlite3";
// import {searchQueries} from "../interfaces/interfaces";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class DatabaseManagerService {
//   db = new Database('../../../../hundedaten.db');
//   constructor() { }
//
//   getAllCustomersWithDogsForSearch() {
// this.db.get('SELECT Customer.name, Customer.lastName, Dogs.name, Dogs.race, Dogs.gender,' +
//   'FROM Customers' +
//   'LEFT JOIN Dogs ON Customer.id = Dogs.ownerId',
//   (_,res) => console.log('allSearchData =' + JSON.stringify(res)));
//   }
//
//   searchCustomersBySearchSpecific(specific: searchQueries, search: string) {
//     switch (specific) {
//       case searchQueries.hundeName:
//         this.db.get('SELECT Customer.name, Customer.lastName, Dogs.name, Dogs.race, Dogs.gender,' +
//           'FROM Customers' +
//           'LEFT JOIN Dogs ON Customer.id = Dogs.ownerId' +
//           `LEFT JOIN Dogs ON Dogs.name = ${search}`,
//           (_,res) => console.log('allSearchData =' + JSON.stringify(res)));
//         break;
//       case searchQueries.dgeburtsdatum:
//         this.db.get('SELECT Customer.name, Customer.lastName, Dogs.name, Dogs.race, Dogs.gender,' +
//           'FROM Customers' +
//           'LEFT JOIN Dogs ON Customer.id = Dogs.ownerId' +
//           `LEFT JOIN Customer ON Customers.dateOfBirth = ${search}`,
//           (_,res) => console.log('allSearchData =' + JSON.stringify(res)));
//         break
//       case searchQueries.hgeburtsdatum:
//         this.db.get('SELECT Customer.name, Customer.lastName, Dogs.name, Dogs.race, Dogs.gender,' +
//           'FROM Customer' +
//           'LEFT JOIN Dogs ON Customer.id = Dogs.ownerId',
//           (_,res) => console.log('allSearchData =' + JSON.stringify(res)));
//         break
//       case searchQueries.lastTraining:
//         this.db.get('SELECT Customer.name, Customer.lastName, Dogs.name, Dogs.race, Dogs.gender,' +
//           'FROM Customer' +
//           'LEFT JOIN Dogs ON Customer.id = Dogs.ownerId',
//           (_,res) => console.log('allSearchData =' + JSON.stringify(res)));
//         break
//       default:
//         break
//     }
//
//     }
//   getCustomerByName(name: string, lastName: string) {
//     this.db.get('SELECT Customer.name, Customer.lastName, Dogs.name, Dogs.race, Dogs.gender,' +
//       'FROM Customers' +
//       'LEFT JOIN Dogs ON Customer.id = Dogs.ownerId' +
//       `WHERE name = ${name} AND lastName = ${lastName}`,
//       (_,res) => console.log('allSearchData =' + JSON.stringify(res)));
//   }
// }
