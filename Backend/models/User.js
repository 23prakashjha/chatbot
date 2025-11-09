const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  interests: [String],
});

module.exports = mongoose.model('User', userSchema);
