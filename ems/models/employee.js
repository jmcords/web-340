//Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema
let employeeSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
});

// Export the model so its publicly available.
module.exports = mongoose.model('Employee', employeeSchema);