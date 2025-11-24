require('dotenv').config()

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const subscribersRouter = require('./routes/subscribers')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection;
db.on('error', (err) => {
    console.error(err);
})
db.once('open', () => {
    console.log('connected to database')
})

app.use(express.json())

app.use('/subscribers', subscribersRouter)

app.listen(3000, () => {
    console.log('Server Running - Listening on server 3000')
}) 