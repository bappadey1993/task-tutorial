//Add your database
// import mysql2 from "mysql2-promise";
// import mysql from "mysql";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   connectionLimit: 10,
//   queueLimit: 0,
//   waitForConnections: true,

connectionLimit: 10,
host: process.env.HOST || "localhost",
user: process.env.USER || "root",
password: process.env.PASSWORD || "",
database: process.env.DATABASE || "nodemysqlcrud",
waitForConnections: true,
queueLimit: 0
});

const checkConnection = async () => {
  try {
    // const connection = await pool.getConnection();
    // console.log("Database Connection Successfull!!");
    // connection.release();

    pool.getConnection((err, connection) => {
      if (err) {
        console.log({ errorText: err.message });
      }

      console.log("Connected to MySQL database successfully vs 2");
      // connection.release();
    });
  } catch (error) {
    console.log("Error connecting to database!");
    throw error;
  }
};

export { pool, checkConnection };
