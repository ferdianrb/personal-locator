var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PersonSchema   = new Schema({
    name: String,
    address: String,
    status: String,
    
});

module.exports = mongoose.model('Person', PersonSchema, 'persons');