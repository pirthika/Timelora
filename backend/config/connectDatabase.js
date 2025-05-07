const mongoose = require('mongoose');

const connectDatabase = () => {
   mongoose.connect(process.env.DB_URL).then((con) => {
     console.log(`MongoDB connected to host: ${con.connection.host}`); // Corrected string concatenation
   }).catch((error) => {
     console.error('Error connecting to MongoDB:', error); // Added error handling
   });
};

module.exports = connectDatabase;
