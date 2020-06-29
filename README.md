# AngularChallenge
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Initialize project:

For the Angular CLI to work the yarn package manager must be installed. 
Configure Angular CLI to use yarn and install all dependencies.

    $ ng config --global cli.packageManager yarn
    $ yarn
All Angular CLI functionality is now available.
    
    $ ng serve
   
## Project Overview
The Project is a simple App, that displays Datasets from Measurements  in a simple datatable.

The state.service.ts provides a  state management implementation, consisting of BehaviouralSubjects, which emit all Values to be displayed in the datatable and a information about the state of the sidebar.

It's your task to enrich this app with additional functionality.

Please us ts-doc comments to document your code changes.

## Tasks 

### Add a Lazy Loaded Module with form to add a measurement
Add a Lazy Loaded Module to the application.
Add at least one component to the Module which is displayed under it's own route.

Add a form to the lazy loaded module, which enables endusers to add additional Measurements to the datatable.

Implement this functionality in a fully reactive manner. Keep the state of the Application(managed in the BehaviouralSubjects) immutable.

Add a link in the Sidebar Nav to the newly created Form.

You **do not** have to implement any data persistence. Adding the Data to the local state is fine.

### Add A Websocket Listener
You will find an existing websocket host under ws://challenge3.rrooaarr.cloud/.

This Websocket hosts sends messages containing additional Measurements. Each message is in the correct format according to the Measurement Interface. You **do not** have to validate the incoming data.


Implement the functionality to add all Incoming Measurements to the DataTable.

Please Note that Incoming Websocket-Measurements and Measurements from the form should be merged. 

### Optional

Implement a Bar Chart with ng2-charts which displays the Data over Time and automatically updates with the state.
