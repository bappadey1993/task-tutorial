import express from "express";
import mysql from "mysql";
import cors from "cors";
import connectDB from "./db.js";
import dotenv from 'dotenv';
dotenv.config()
const port = process.env.PORT || 8081;

const app = express();
app.use(cors());
// const port = 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysqlcrud",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error inside server.." });
    // console.log("server console", result);
    return res.json(result);
  });
});

app.post("/add-student", (req, res) => {
  const sql = "INSERT INTO student (`name`,`email`,`phone`) VALUES (?)";
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
  const sql = `SELECT * FROM student WHERE ID = ?`;
  db.query(sql, id, (err, result) => {
    if (err) return res.json({ Message: `Error inside server with error: ${err}`,  });
    return res.json(result);
  });
});

app.put('/student-edit/:id', (req,res)=> {
    const sql = "UPDATE student SET `name`=?, `email`=?, `phone`=? WHERE id = ? ";
    const id  =req.params.id;
    db.query(sql, [req.body.name, req.body.email, req.body.phone, id], (err, result)=> {
        if (err) return res.json({ Message: `Error inside server with error: ${err}`,  });
        return res.json(result);
    })
});

app.delete('/student-delete/:id', (req,res)=> {
    const sql = "DELETE FROM student WHERE id = ?";
    const id  =req.params.id;
    db.query(sql, [id], (err, result)=> {
        if (err) return res.json({ Message: `Error inside server with error: ${err}`,  });
        return res.json(result);
    })
});

app.listen(port, () => {
  console.log(`Local server app listening on port: ${port}`);
});
