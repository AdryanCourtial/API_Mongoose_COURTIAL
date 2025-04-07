const mongoose = require('mongoose')

const ExperienceSchema = new mongoose.Schema({
    titre: { 
        type: String,
        required: true 
    },
    entreprise: {
        type: String,
        required: true 
    },
    dates: { 
        type: String, 
        required: true
    },
    description: { 
        type: String
    }
});

module.exports = {
    ExperienceSchema
}