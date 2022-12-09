## Les Argonautes ##

This is the front end and back end server for the tech project the Web Developer school Wild Code School in december 2022.

""The day has finally come for Jason to avenge his father and reclaim the throne of Iolcos. To reach Colchis, Jason must sail on the Black Sea. He had a powerful ship built for the expedition, the Argo. Now he has to find the crew. My mission is to create a dynamic web application including an input form where you and Jason will add in real time the list of candidates.""

## Technologies used ##
Front-end : React, axios, redux toolkit, styled components and lottie animations.
Back-end : NodeJS, Express and for the database MongoDB with this framework Mongoose.

## Prerequisites ##
You will need to have Node and npm installed locally on your machine.
Then Clone this repository. 

## Databse installation : MongoDB ## 
Go to the [MongoDb](https://www.mongodb.com/home) website and create an account.  
Once the account is created, create your database, making sure to configure it so that the user can run the application on his own machine with this configuration :   

`"Network Access -> Allow access from anywhere"`    

Once the database is created, you should have :  
* A database connection ID  
* A database connection password  


## Configuration of environment variables ##
At the root of the backend folder, create an ".env" file in which your MongoDB connection credentials and environment variables :  

KEY_MONGODB = 'mongodb+srv://"dbUserName":"dbPassword"@groupomania.6i8a9gh.mongodb.net/Groupomania'  
PORT= 5500  
ACCESS_TOKEN_SECRET= 'random character string'  

## Back end Installation ##
Run npm install.
From the "back" folder of the project, run the server with npm start. 
The server should run on localhost with default port 5500.
You should see this message on your console : 

"Server is listening on localhost:5500/
MongoDB connected"

## Front en Installation ##
Run npm install.
From the "front" folder of the project, run npm start. 
The view front-end should start in the browser, on port default 3000.
You should see this message on your console :

''You can now view front-end in the browser.
  Local: http://localhost:3000''


## DEVELOPER ##
PUGEAUT Camille

https://github.com/PUGEAUTCam
https://www.linkedin.com/in/camille-pugeaut/
