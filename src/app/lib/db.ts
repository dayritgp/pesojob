import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost", // Change if needed
  user: "root",
  password: "", // Leave empty if no password
  database: "peso_job_seeker", // ✅ Use your chosen database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db;
