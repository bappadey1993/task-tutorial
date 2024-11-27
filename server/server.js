import express from "express";
import mysql from "mysql";
// const mysql = require('mysql2/promise');
import cors from "cors";
// import connectDB from "./db.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 8081;
import { checkConnection } from './config/db.js';
import createAllTable from './utils/dbUtils.js';
import authRoutes from './routes/authRoutes.js'

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', authRoutes); // Use user routes for API calls

// connectDB();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysqlcrud",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM students";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error inside server.." });
    // console.log("server console", result);
    return res.json(result);
  });
});

app.post("/add-student", (req, res) => {
  const sql = "INSERT INTO students (`name`,`email`,`phone`) VALUES (?)";
  const Values = [req.body.name, req.body.email, req.body.phone];

  // console.log(Values)

  db.query(sql, [Values], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

// Read student
app.get("/student/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM students WHERE ID = ?`;
  db.query(sql, id, (err, result) => {
    if (err)
      return res.json({ Message: `Error inside server with error: ${err}` });
    return res.json(result);
  });
});

app.put("/student-edit/:id", (req, res) => {
  const sql = "UPDATE students SET `name`=?, `email`=?, `phone`=? WHERE id = ? ";
  const id = req.params.id;
  db.query(
    sql,
    [req.body.name, req.body.email, req.body.phone, id],
    (err, result) => {
      if (err)
        return res.json({ Message: `Error inside server with error: ${err}` });
      return res.json(result);
    }
  );
});

app.delete("/student-delete/:id", (req, res) => {
  const sql = "DELETE FROM students WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err)
      return res.json({ Message: `Error inside server with error: ${err}` });
    return res.json(result);
  });
});

app.listen(port, async() => {
  try {
    console.log(`Local server app listening on port: ${port}`);
    await checkConnection();
    await createAllTable();
  } catch (error) {
    console.log("Failed to initialize the database",error);
  }
});
