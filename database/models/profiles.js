const mongoose = require("mongoose")
const { ExperienceSchema } = require('./experience')
const { InformationSchema } = require('./information')


const { Schema } = mongoose;

const ProfilesShema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    experience: {
        type: [ExperienceSchema]
    },
    skills: {
        type: [String]
    },
    information: {
        type: InformationSchema
    }

})

const Profiles = mongoose.model('profiles', ProfilesShema)

module.exports = Profiles