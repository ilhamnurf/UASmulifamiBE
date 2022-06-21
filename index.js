const express= require('express');

const app =express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const router = require('./routes/routing');
const port = process.env.PORT || 2722;





app.use(cors())
app.use(express.json());
app.use(router);
app.listen(port, () => {
    console.log(`UaS berjalan lancar di tahun ${port}`);
  });