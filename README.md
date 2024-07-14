# Fitkit Server
## Live URL
[Click here](https://fitkit-server.vercel.app/)

## Technologies

* **Programming Language:** TypeScript
* **Web Framework:** Express.js
* **Database** MongoDB
* **ODM Library:**  Mongoose
* **Validation:** Zod Validation
* **Others NPM Package:** cors, dotenv, http-status

## Features

*  We can create, get, update and delete products.
*  we can search, filter and sort products.


## How to run this application locally.


 **Step-1:** Clone the following github repository into the local folder.
 

```   
https://github.com/miavai649/fitkit-server
```
 **Step-2:** We need to install the node_modules and also the others essential packages .
 ```   
npm i
```
 **Step-3:** Then we need to set our environment variables, for this we need to create a file `.env` in the root directory.

 ```   
DB_URL=your_db_url
PORT=5000
```

 **Step-4:** We are ready to run this application locally, just run the below command and the application will start running.
 ```   
npm run start:dev
```
