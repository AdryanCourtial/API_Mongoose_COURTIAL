const mongoose = require('mongoose')

const InformationSchema = new mongoose.Schema({
    bio: {
        type: String,
        required: true
    },
    localisation: {
        type: String,
        required: true
    },
    site_web: {
        type: String,
        required: true
    },
  });

  module.exports = {
    InformationSchema
  }