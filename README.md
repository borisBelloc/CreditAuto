# Projet Crédit Auto

### Technos :

- Angular 8
    - Packages installed (node_modules) : 
        - [bootstrap](https://www.npmjs.com/package/bootstrap)
        - [@ng-bootstrap/ng-bootstrap](https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap)
        - [@fortawesome/fontawesome-free](https://www.npmjs.com/package/@fortawesome/fontawesome-free)
        - Updated version of [Serialize JavaScript](https://www.npmjs.com/package/serialize-javascript) | [doc](https://github.com/streamlit/streamlit/issues/819)
- Spring
- Maven
- Tomcat v9


### Run the project

##### Development 

###### Front :
- Instal [NodeJS](https://nodejs.org/en/download/)
- Install [AngularCLI](https://cli.angular.io/) : `npm install -g @angular/cli`
- Inside the *Front* folder : `npm install` to install the required node modules
- Launch with `ng serve -o`


###### Back :
- Install a database management system (example : [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads))
- Create a database (example [pgAdmin](https://www.pgadmin.org/))
    - See the parameters to config your database in the file `application.properties`
- Install [Tomcat](https://tomcat.apache.org/whichversion.html)
- Add a tomcat server (easily done with [Eclipse](https://www.eclipse.org/downloads/packages/))
- Launch server (tables should be created by Tomcat)
- Add data to the database :
    - Install [Postman](https://www.getpostman.com/)
    - Send a **Post** request (go to data : Row > JSON) to `http://localhost:8080/benks/api/rates/addRates` with in the body  the JSON from below :

		<details>
		  <summary>JSON Loan rates</summary>

		```JSON
		[
    {
        "rateValue": 0.65,
        "categorie": "A",
        "valMin": -1,
        "valMax": 10000,
        "dureeMin": -1,
        "dureeMax": 30,
	"rateName": "T1"
    },
    {
        "rateValue": 0.34,
        "categorie": "A",
        "valMin": -1,
        "valMax": 10000,
        "dureeMin": 30,
        "dureeMax": 3000,
	"rateName": "T2"
    },
    {
        "rateValue": 0.34,
        "categorie": "A",
        "valMin": 10000,
        "valMax": 999999999,
        "dureeMin": -1,
        "dureeMax": 24,
	"rateName": "T2"
    },
    {
        "rateValue": 0.45,
        "categorie": "A",
        "valMin": 10000,
        "valMax": 999999999,
        "dureeMin": 24,
        "dureeMax": 3000,
	"rateName": "T3"
    },
    {
        "rateValue": 0.45,
        "categorie": "B",
        "valMin": -1,
        "valMax": 15000,
        "dureeMin": -1,
        "dureeMax": 18,
	"rateName": "T3"
    },
    {
        "rateValue": 0.21,
        "categorie": "B",
        "valMin": -1,
        "valMax": 15000,
        "dureeMin": 18,
        "dureeMax": 36,
	"rateName": "T4"
    },
    {
        "rateValue": 0.44,
        "categorie": "B",
        "valMin": -1,
        "valMax": 15000,
        "dureeMin": 36,
        "dureeMax": 3000,
	"rateName": "T5"
    },
    {
        "rateValue": 0.44,
        "categorie": "B",
        "valMin": 15000,
        "valMax": 25000,
        "dureeMin": -1,
        "dureeMax": 24,
	"rateName": "T5"
    },
    {
        "rateValue": 0.74,
        "categorie": "B",
        "valMin": 15000,
        "valMax": 25000,
        "dureeMin": 24,
        "dureeMax": 3000,
	"rateName": "T6"
    },
    {
        "rateValue": 0.74,
        "categorie": "B",
        "valMin": 25000,
        "valMax": 9999999,
        "dureeMin": -1,
        "dureeMax": 3000,
	"rateName": "T6"
    }
]  
		```
		</details>
    

### Changelog

* 2019/12/04 : Initialisation
* 2019/12/18 : v1.00
