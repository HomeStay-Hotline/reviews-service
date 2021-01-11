# HomeStay Hotline/Reviews-service Backend Project

## Goal
HomeStay Hotline is an open-source room reservation app designed with service oriented architecture in mind. The review service component is responsible presenting customer reviews for each listing. This project is based on a legacy code base. It original could only handle 350 request per second after deployed . So my goal is to optimize performance in order to handle spike in product level traffic and maintain the same front end user interface. I re-did the backend code and achieved 1300 request per second after deployed, which is about 370% higher then original. 

## Requirements:
Node.js
Postgres SQL

## Getting Started:
Clone this repository
```sh
$ git clone https://github.com/HomeStay-Hotline/reviews-service.git
$ cd reviews-service
```
Install dependencies
```sh
$ npm install
```
To start this project, you can pass in database host, database user and password as environment variable as you run this application
VAR1 => database username
VAR2 => database password
VAR3 => database host

Or, you can also edit esrver/database/index.js to update those database info.

Run following script to buid webpack bundle and run server.
```sh
npm run build
npm start
```

## API:
GET request: Select all reviews that associated with the given listing id
Endpoint: '/api/homes/:id/reviews'
