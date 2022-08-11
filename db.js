if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}
const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false" || process.env.DB_URL;

const connectToMongo = () => {
    mongoose.connect(mongoURI) // Adding new mongo url parser
        .then(() => console.log('Connected to Mongo Successfully'))
        .catch(err => console.log(err));
}

module.exports = connectToMongo;