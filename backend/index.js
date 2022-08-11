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
__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname,'../build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    });
} else {
    app.get('/', (req, res) => {
        res.send('Server is Running! 🚀');
    });
}


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})