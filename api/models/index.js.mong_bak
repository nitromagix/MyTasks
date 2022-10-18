//

const MONGO_URI = process.env.MONGO_URI;

require("dotenv").config();
const mongoose = require('mongoose');

mongoose.connect(MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}, () => {
  console.log(`mongoose connected --> ${MONGO_URI}`)
})

module.exports.Task = require('./task');
