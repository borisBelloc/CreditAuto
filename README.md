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
- Create a database (easly done with [pgAdmin](https://www.pgadmin.org/))
    - See the parameters to config your database in the file `application.properties`
- Install [Tomcat](https://tomcat.apache.org/whichversion.html)
- Add a tomcat server (easly done with [Eclipse](https://www.eclipse.org/downloads/packages/))
- Launch server (tables should be created by Tomcat)
- Add data (_coming soon_)

### Changelog

* 2019/12/04 : Initialisation


