const MOONGOSE = require("mongoose");

const USER_SCHEMA = new MOONGOSE.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlenght: 7,
  },
});

const USER_MODEL = MOONGOSE.model("User", USER_SCHEMA);

module.exports = USER_MODEL;
