const connectToMongo = require('./db');
const express = require('express');
let cors = require('cors');
const path = require('path'); 
const bodyParser = require("body-parser");

connectToMongo();
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

// deployment
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('frontend/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}

app.all('*', (req, res) => {
    res.send('Page does not exist ');
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})