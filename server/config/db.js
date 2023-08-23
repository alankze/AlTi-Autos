/*const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('CONNECTION', process.env.MONGODB_ATLAS_CONNECTION_STRING);
    await mongoose.connect(process.env.MONGODB_ATLAS_CONNECTION_STRING);
    console.log('MONGODB CONNECTED SUCCESSFULLY!!!');
  } catch (error) {
    console.log('MONGODB CONNECTION ERROR', error);
    process.exit(1);
  }
};

module.exports = connectDB;
*/
/*const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_ATLAS_CONNECTION_STRING);
const connection = mongoose.connection;

connection.on('connected' , () => {
    console.log('MONGO DB CONNECTION SUCCESSFUL');
})

connection.on('error' , (err) => {
    console.log('MONGO DB CONNECTION Failed');
})

module.exports = connection;*/

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('CONNECTION', process.env.MONGODB_ATLAS_CONNECTION_STRING);
    await mongoose.connect(process.env.MONGODB_ATLAS_CONNECTION_STRING);
    console.log('MONGODB CONNECTED SUCCESSFULLY!!!');
  } catch (error) {
    console.log('MONGODB CONNECTION ERROR', error);
    process.exit(1);
  }
};

module.exports = connectDB;