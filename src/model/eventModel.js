'use strict';

const mongoose = require('mongoose');

const events = new mongoose.Schema({
  service_name: { type: String, required: true},
  type: { type: String},
  time: {type: Date, default: Date.now},
  data:{type: String},
});

module.exports = mongoose.model('events', events);

