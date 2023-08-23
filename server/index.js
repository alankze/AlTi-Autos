require('dotenv/config');
const express = require('express');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const carsRouter = require("./routes/cars");
const authRouter = require('./routes/auth');
const app = express();
const connectDB = require('./config/db');

const port = process.env.PORT || 8000;
app.use(cors({origin:process.env.FRONTEND_URL, credentials:true}));
app.use(cookieParser());
app.use('/auth', authRouter);
app.use('/api/cars',carsRouter);
connectDB().then(() => {
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  });