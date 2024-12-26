const mysql = require("mysql2");

// MySQL Connection Configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Default XAMPP username
  password: "", // Leave blank unless you set a password
  database: "pubquiz", // Your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Connection Error:", err);
    return;
  }
  console.log("Connected to MySQL!");

  // Run a test query
  db.query("SELECT * FROM RandomTable", (err, results) => {
    if (err) {
      console.error("Query Error:", err);
      return;
    }
    console.log("Query Results:", results);
  });
});
