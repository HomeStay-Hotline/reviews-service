DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;

CREATE TABLE listings (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cleanliness DOUBLE,
    communication DOUBLE,
    check_in DOUBLE,
    accuracy DOUBLE,
    location DOUBLE,
    value DOUBLE
);

CREATE TABLE reviews (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    listing_id int NOT NULL references listings(id),
    user varchar(255) NOT NULL,
    url varchar(255) NOT NULL,
    review text NOT NULL,
    review_date date,
    cleanliness DOUBLE,
    communication DOUBLE,
    check_in DOUBLE,
    accuracy DOUBLE,
    location DOUBLE,
    value DOUBLE
);