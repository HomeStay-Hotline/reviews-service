DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    customer_name varchar(255) NOT NULL,
    photo_url varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    listing_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL references customers(id),
    review text NOT NULL,
    review_date VARCHAR,
    cleanliness NUMERIC(2,1),
    communication NUMERIC(2,1),
    check_in NUMERIC(2,1),
    accuracy NUMERIC(2,1),
    location_review NUMERIC(2,1),
    value_review NUMERIC(2,1)
);
