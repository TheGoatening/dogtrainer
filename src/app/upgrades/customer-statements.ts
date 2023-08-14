export const customersVersionUpgrades = [
  {
    toVersion: 1,
    statements: [
      `CREATE TABLE Customers (
          id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
          name varchar NOT NULL,
          vorname varchar NOT NULL,
          geburtsdatum varchar,
          telefonNummer varchar,
          mobileNummer varchar,
          mail varchar NOT NULL,
          street varchar NOT NULL,
          plz varchar NOT NULL,
          hundName varchar NOT NULL,
          kastriert integer NOT NULL,
          gender integer NOT NULL,
          hgeburtsdatum varchar NOT NULL,
          sonstiges varchar NOT NULL,
          mail varchar NOT NULL,
          mail varchar NOT NULL,
        );`,
      `CREATE TABLE Termine (
          id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
          customerId integer NOT NULL,
          datum varchar NOT NULL,
          amnese varchar NOT NULL,
          process varchar NOT NULL,
          sonstiges varchar NOT NULL,
        );`,
    ]
  }
]
