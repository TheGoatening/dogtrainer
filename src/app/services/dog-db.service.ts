import { SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { SQLiteService } from './sqlite.service';
import { DbnameVersionService } from './dbname-version.service';

import { environment } from 'src/environments/environment';
import { authorPostsVersionUpgrades } from 'src/app/upgrades/author-posts/upgrade-statements';

import { JsonPost, Post, Author, Category, PostData } from '../models/author-posts';

import {Customer, Termin} from "../models/dog-trainer";
import {MOCK_Customers} from "../mock-data/customer-mock";
import {customersVersionUpgrades} from "../upgrades/customer-statements";


@Injectable()
export class DogDbService {
  public databaseName: string;
  public customerList: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);
  public customerItem: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);
  public appointmentListForCustomer: BehaviorSubject<Termin[]> = new BehaviorSubject<Termin[]>([]);

  private isCustomerDataListReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private iscustomerItemReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private isAppointmentListReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private versionUpgrades = customersVersionUpgrades;
  private loadToVersion = customersVersionUpgrades[customersVersionUpgrades.length-1].toVersion;
  private mDb!: SQLiteDBConnection;

  constructor(  private sqliteService: SQLiteService,
                private dbVerService: DbnameVersionService,
  ) {
    this.databaseName = environment.databaseNames.filter(x => x.name.includes('dog'))[0].name;
    console.log(this.databaseName);
  }

  async initializeDatabase() {
    // create upgrade statements
    await this.sqliteService
      .addUpgradeStatement({ database: this.databaseName,
        upgrade: this.versionUpgrades});
    // create and/or open the database
    await this.openDatabase();
    console.log('after open Database')
    this.dbVerService.set(this.databaseName,this.loadToVersion);
    const isData = await this.mDb.query("select * from sqlite_sequence");
    // create database initial data
    if(isData.values!.length === 0) {
      await this.createInitialData();
    }
    if( this.sqliteService.platform === 'web') {
      await this.sqliteService.sqliteConnection.saveToStore(this.databaseName);
    }
    await this.getAllData();
  }

  async openDatabase() {
    if((this.sqliteService.native || this.sqliteService.platform === "electron")
      && (await this.sqliteService.isInConfigEncryption()).result
      && (await this.sqliteService.isDatabaseEncrypted(this.databaseName)).result) {
      this.mDb = await this.sqliteService
        .openDatabase(this.databaseName, true, "secret",
          this.loadToVersion,false);
console.log('in open Database if')
    } else {
      console.log('in open Database else')
      this.mDb = await this.sqliteService
        .openDatabase(this.databaseName, false, "no-encryption",
          this.loadToVersion,false);
    }
  }

  async getAllData() {
    await this.getAllCustomers();
    this.isCustomerDataListReady.next(true);
  }
  /**
   * Return CustomerDataList state
   * @returns
   */
  customerDataListReady() {
    return this.isCustomerDataListReady.asObservable();
  }
  /**
   * Return CustomerItem state
   * @returns
   */
  customerItemState() {
    return this.iscustomerItemReady.asObservable();
  }
  /**
   * Return AppointmentList state
   * @returns
   */
  appointmentListState() {
    return this.isAppointmentListReady.asObservable();
  }
  /**
   * Fetch CustomerList
   * @returns
   */
  fetchCustomers(): Observable<Customer[]> {
    return this.customerList.asObservable();
  }
  /**
   * Fetch AppointmentList
   * @returns
   */
  fetchAppointments(): Observable<Termin[]> {
    return this.appointmentListForCustomer.asObservable();
  }
  /**
   * Fetch Customer
   * @returns
   */
  fetchCustomerItem(): Observable<Customer[]> {
    return this.customerItem.asObservable();
  }

  /**
   * Get, Create, Update an Customer
   * @returns
   */
  async getCustomer(jsonCustomer: Customer): Promise<Customer> {
    let customer = await this.sqliteService.findOneBy(this.mDb, "Customers", {id: jsonCustomer.id});
    if (!customer) {
      if (jsonCustomer.vorname && jsonCustomer.name) {
        // create a new author
        customer = new Customer();
        customer.id = jsonCustomer.id;
        customer.name = jsonCustomer.name;
        customer.vorname = jsonCustomer.vorname;
        customer.geburtsdatum = jsonCustomer.geburtsdatum;
        customer.telefonNummer = jsonCustomer.telefonNummer;
        customer.mobileNummer = jsonCustomer.mobileNummer;
        customer.mail = jsonCustomer.mail;

        if (jsonCustomer.street) {
          customer.street = jsonCustomer.street;
          customer.ort = jsonCustomer.ort;
          customer.plz = jsonCustomer.plz;
        }

        if (jsonCustomer.hundName) {
          customer.hundName = jsonCustomer.hundName;
          customer.rasse = jsonCustomer.rasse;
          customer.kastriert = jsonCustomer.kastriert;
          customer.gender = jsonCustomer.gender;
          customer.hgeburtsdatum = jsonCustomer.hgeburtsdatum;
          customer.sonstiges = jsonCustomer.sonstiges;
        }

        await this.sqliteService.save(this.mDb, "Customers", customer);
        customer = await this.sqliteService.findOneBy(this.mDb, "Customers", {id: jsonCustomer.id});
        if (customer) {
          return customer;
        } else {
          return Promise.reject(`failed to getCustomer for id ${jsonCustomer.id}`);
        }
      } else {
        return Promise.reject(`failed to getCustomer for id ${jsonCustomer.id}`);
      }
    } else {
      if (Object.keys(jsonCustomer).length > 1) {
        // update and existing customer
        const updCustomer = new Customer();
        if (jsonCustomer.vorname && jsonCustomer.name) {
          // create a new author
          updCustomer.id = jsonCustomer.id;
          updCustomer.name = jsonCustomer.name;
          updCustomer.vorname = jsonCustomer.vorname;
          updCustomer.geburtsdatum = jsonCustomer.geburtsdatum;
          updCustomer.telefonNummer = jsonCustomer.telefonNummer;
          updCustomer.mobileNummer = jsonCustomer.mobileNummer;
          updCustomer.mail = jsonCustomer.mail;

          if (jsonCustomer.street) {
            updCustomer.street = jsonCustomer.street;
            updCustomer.ort = jsonCustomer.ort;
            updCustomer.plz = jsonCustomer.plz;
          }

          if (jsonCustomer.hundName) {
            updCustomer.hundName = jsonCustomer.hundName;
            updCustomer.rasse = jsonCustomer.rasse;
            updCustomer.kastriert = jsonCustomer.kastriert;
            updCustomer.gender = jsonCustomer.gender;
            updCustomer.hgeburtsdatum = jsonCustomer.hgeburtsdatum;
            updCustomer.sonstiges = jsonCustomer.sonstiges;
          }
          await this.sqliteService.save(this.mDb, "Customers", updCustomer, {id: jsonCustomer.id});
          customer = await this.sqliteService.findOneBy(this.mDb, "Customers", {id: jsonCustomer.id});
          if (customer) {
            return customer;
          } else {
            return Promise.reject(`failed to getCustomer for id ${jsonCustomer.id}`);
          }
        } else {
          return customer;
        }
      }
    }
      return customer;
    }
  /**
   * Delete an Customer
   * @returns
   */
  async deleteCustomer(jsonCustomer: Author): Promise<void>  {
    let customer = await this.sqliteService.findOneBy(this.mDb, "Customers", {id: jsonCustomer.id});
    if( customer) {
      await this.sqliteService.remove(this.mDb, "Customers", {id: jsonCustomer.id});
    }
    return;
  }
  /**
   * Get all Customers
   * @returns
   */
  async getAllCustomers(): Promise<void> {
    const customers: Customer[] = (await this.mDb.query("select * from Customers")).values as Customer[];
    this.customerList.next(customers);
  }


  /**
   * Get all Termine for Customer
   * @returns
   */
  async getAllTermineForCustomer(id: number): Promise<void> {
    const termineForCustomer: Termin[] = (await this.mDb.query("select * from Termine whenever Termine.customerId = "+ id +" ")).values as Termin[];
    this.appointmentListForCustomer.next(termineForCustomer);
  }
  async makeNewTermin(jsonTermin: Termin): Promise<void> {
    let retTermin = await this.sqliteService.findOneBy(this.mDb, "Termine", {id: jsonTermin.id});
    if (!retTermin) {
      if (jsonTermin.customerId) {
        // create a new Post
        const termin: Termin = await this.createTermin(jsonTermin);
        await this.sqliteService.save(this.mDb, "Termine", termin);
      }
    }
  }

  /**
   * Delete a termin
   * @returns
   */
  async deleteTermin(jsonTermim: Termin): Promise<void>  {
    let termin = await this.sqliteService.findOneBy(this.mDb, "Termine", {id: jsonTermim.id});
    if( termin) {
      await this.sqliteService.remove(this.mDb, "Termine", {id: jsonTermim.id});;
    }
  }

  /*********************
   * Private Functions *
   *********************/

  /**
   * Create Database Initial Data
   * @returns
   */
  private async createInitialData(): Promise<void> {
    // create authors
    for (const customer of MOCK_Customers) {
      await this.getCustomer(customer);
    }

  }
  /**
   * Create Termin
   * @returns
   */
  private async createTermin(jsonTermin: Termin): Promise<Termin> {
    const termin = new Termin();
    termin.id = jsonTermin.id;
    termin.datum = jsonTermin.datum
    termin.amnese = jsonTermin.amnese
    termin.process = jsonTermin.process
    termin.sonstiges = jsonTermin.sonstiges

    if(jsonTermin.customerId) {
      const customer: Customer = await this.sqliteService.findOneBy(this.mDb, "Customers", {id: jsonTermin.customerId});
      if(customer)
        termin.customerId =  jsonTermin.customerId;
    }
    return termin;
  }

}
