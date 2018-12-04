var User = require('../models/user.model').User;
var ObjectId = require('mongodb').ObjectID;

// Display list of all Users.
exports.user_list = function (req, res) {
  User.find({}, function (err, user) {
    if (err) {
      res.json(err);
    } else {
      res.json(user);
    }
  });
};


exports.user_by_id = function (req, res) {
  var id = req.params.id;
  User.findById(id, function (err, user) {
    if (err) {
      res.json(err);
    } else {
      res.json(user);
    }
  });
}

exports.create_user = function (req, res) {
  // Logic of creating new user will go here
}

exports.delete_user = function (req, res) {
  // Logic of deleting user will go here
}

