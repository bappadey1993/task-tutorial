import { pool } from "../config/db.js";

const studentTableQuery = `CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone VARCHAR(15), -- Add mobile field with a suitable length
  gender VARCHAR(15), -- Add gender field
  password VARCHAR(255) NOT NULL, -- Add password field; using VARCHAR(255) for hashed passwords
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

const userTableQuery = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    mobile VARCHAR(15), -- Add mobile field with a suitable length
    password VARCHAR(255) NOT NULL, -- Add password field; using VARCHAR(255) for hashed passwords
    gender VARCHAR(255), -- Add gender field
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

const postTableQuery = `CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

const createTable = async (tableName, query) => {
  try {
    await pool.query(query);
    console.log(`${tableName} table created or already exists`);
  } catch (error) {
    console.log(`Error creating ${tableName}`, error);
  }
};

const createAllTable = async () => {
  try {
    await createTable("Users", userTableQuery);
    await createTable("Posts", postTableQuery);
    await createTable("Students", studentTableQuery);
    console.log("All tables created successfully!!");
  } catch (error) {
    console.log("Error creating tables", error);
    throw error;
  }
};

export default createAllTable;