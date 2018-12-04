var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const UserSchema = new Schema({}, { strict: false });
exports.User = mongoose.model('user', UserSchema);
