const config = {
    // host: process.env.HOST || ,
    // user: process.env.USER,
    // password: process.env.PASSWORD,
    // database: process.env.DATABASE,

    host: process.env.HOST || "localhost",
    user: process.env.USER || "root",
    password: process.env.PASSWORD || "",
    database: process.env.DATABASE || "nodemysqlcrud",
  };
  
//   module.exports = config;
export default config;