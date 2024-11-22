
import mysql from "mysql";
import config from './config.js';
 

const connectDB = async () => {
// function connectDB = async () => {
  // console.log('db.js=> ',config)
  const pool = mysql.createPool(config);

  pool.getConnection((err, connection) => {
    if (err) {
      console.log({ error: err.message });
    }

    console.log("Connected to MySQL database successfully - base");
    // connection.release();
  });
};

// module.exports = connectDB;
export default connectDB;