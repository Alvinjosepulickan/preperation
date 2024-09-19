node -v
npm i @angular/cli
ng v



ng new <project name>                               Creates a new Angular application
ng serve --open                                     Builds and runs the application on lite-server and launches a browser
ng generate <name>                                  Creates class, component, directive, interface, module, pipe, and service
ng build                                            Builds the application



node_modules/                                       Node.js creates this folder and puts all npm modules installed as listed in package.json
src/                                                All application-related files will be stored inside it
angular.json                                        Configuration file for Angular CLI where we set several defaults and also configure what 
                                                        files to be included during project build
package.json                                        This is a node configuration file that contains all dependencies required for Angular
tsconfig.json                                       This is the Typescript configuration file where we can configure compiler options
.angular	                                        From Angular version 13.0.0, .angular folder is generated in the root. 
                                                        This folder caches the builds and is ignored by git.



npm install