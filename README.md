# HomeStay Hotline/Reviews-service Backend Project

## Goal
HomeStay Hotline is an open-source accomadation booking application designed with service oriented architecture. This project is especially for the review service component and the goal of this project is to build a new back end for the review service component to handle production level traffic. I inherited a legacy code base, which had a fully working front end. Initially, it could only handle 350 request per second after deployed. I started with a project scope, then reshaped database schema, benchmarked databases, performed local stress testing and cloud-based stress testing. By observing the performance during testing, I identified and solved bottlenecks. As a result, it can handle 1300 request per second when deployed, which is about 370% higher then original throughput. That means more users can interact with the application at the same time without waiting, which improved user experience. 

## Related Projects

  - [HomeStay-Hotline Photos Module](https://github.com/HomeStay-Hotline/photos-service)
  - [HomeStay-Hotline Info Module](https://github.com/HomeStay-Hotline/info-service)
  - [HomeStay-Hotline Carousel Module](https://github.com/HomeStay-Hotline/carousel) 
  - [HomeStay-Hotline Reservation Module](https://github.com/HomeStay-Hotline/reservation-service)

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

Run following script to buid webpack bundle and run server.
```sh
npm run build
npm start
```

## API:
GET request: Select all reviews that associated with the given listing id
Endpoint: '/api/homes/:id/reviews'
