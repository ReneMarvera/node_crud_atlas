const express   = require('express');
const mongoose  = require('mongoose');
require('dotenv').config();

const userRoutes = require('./routes/user')

const app       = express();
const port      = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use('/api',userRoutes);


app.get('/',(req,res) => {
    res.send('Hello world!');
});

mongoose
    .connect(process.env.MONGODB_URI)
    .then( () => console.log('Connected to MongoDB Atlas!') )
    .catch( error => console.log(error));

app.listen(9000, () => console.log('server listening on port',port));