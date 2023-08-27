export const customersVersionUpgrades = [
  {
    toVersion: 1,
    statements: [
        `CREATE TABLE IF NOT EXISTS customer (
          id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
          name varchar(255) NOT NULL,
          vorname varchar(255) NOT NULL,
          geburtsdatum varchar(255),
          telefonNummer varchar(255),
          mobileNummer varchar(255),
          mail varchar(255) NOT NULL,
          street varchar(255) NOT NULL,
          ort varchar(255) NOT NULL,
          plz varchar(255) NOT NULL,
          hundName varchar(255) NOT NULL,
          rasse varchar(255) NOT NULL,
          kastriert integer NOT NULL,
          gender integer NOT NULL,
          hgeburtsdatum varchar(255) NOT NULL,
          sonstiges varchar(255) NOT NULL
        );`,
          `CREATE TABLE IF NOT EXISTS termine (
          id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
          datum varchar(255) NOT NULL,
          amnese varchar(255) NOT NULL,
          process varchar(255) NOT NULL,
          sonstiges varchar(255) NOT NULL,
          cusid integer NOT NULL
        );`,
    ]
  }
]
