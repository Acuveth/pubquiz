const sql = require("mssql/msnodesqlv8");

// Configuration with the correct pipe name
const config = {
  server: "np:\\\\.\\pipe\\LOCALDB#EF631FAE\\tsql\\query", // Verified pipe name
  database: "PubQuiz", // Database name
  driver: "msnodesqlv8", // Use the msnodesqlv8 driver
  options: {
    trustedConnection: true, // Enable Windows Authentication
  },
};

// Function to connect and query the database
async function queryDatabase() {
  try {
    console.log("Connecting to the database...");
    const pool = await sql.connect(config);

    console.log("Connected to the database!");
    const result = await pool.request().query("SELECT * FROM dbo.RandomTable");

    console.log("Query Result:", result.recordset);
    await pool.close();
  } catch (err) {
    console.error("Error during database operation:", err);
  }
}

queryDatabase();
