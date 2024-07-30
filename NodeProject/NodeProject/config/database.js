const mongoose = require('mongoose');

const dbConnection = () => {
  mongoose
    .connect(process.env.db_url)
    .then((conn) => {
      console.log(`Database Connected: ${conn.connection.host}`);
    })
   
};

module.exports = dbConnection;




