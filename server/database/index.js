const { Pool } = require('pg');

const config = {
  host: process.env.VAR3,
  port: '5432',
  user: process.env.VAR1,
  database: 'reviews',
  max: 10, // was 20
  password: process.env.VAR2,
};

const pool = new Pool(config);

const getAllInfo = (id, callback) => {
  const sqlString = 'SELECT * FROM reviews, customers WHERE reviews.customer_id = customers.id AND reviews.listing_id = $1';
  pool.query(sqlString, [id], (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(error, results.rows);
  });
};

module.exports = { getAllInfo };

/// Below is sequelize version.
// const { Sequelize, DataTypes } = require('sequelize');
// const {u, p, h} = require('./login.js');
// var1 u, var2 p, var3 host

// const sequelize = new Sequelize('reviews', process.env.VAR1, process.env.VAR2, {
//     host: process.env.VAR3,
//     dialect: 'postgres',
//     logging: false
// });

// const Review = sequelize.define('reviews', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     listing_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     customer_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     review: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//     },
//     review_date: {
//         type: DataTypes.STRING,
//     },
//     cleanliness: {
//         type: DataTypes.DECIMAL,
//     },
//     communication: {
//         type: DataTypes.DECIMAL,
//     },
//     check_in: {
//         type: DataTypes.DECIMAL,
//     },
//     accuracy: {
//         type: DataTypes.DECIMAL,
//     },
//     location_review: {
//         type: DataTypes.DECIMAL,
//     },
//     value_review: {
//         type: DataTypes.DECIMAL,
//     },
// }, {
//     timestamps: false,
// });

// const Customer = sequelize.define('customers', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     customer_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     photo_url: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// }, {
//     timestamps: false,
// });

// Customer.hasMany(Review, {
//     foreignKey: 'customer_id',
// });
// Review.belongsTo(Customer, {foreignKey: 'customer_id'});

// Customer.sync();
// Review.sync();

// module.exports.Review = Review;
// module.exports.Customer = Customer;
