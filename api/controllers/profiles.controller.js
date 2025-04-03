const { find } = require("mongoose")
const Profiles = require('../../database/models/profiles')
const { ProfilesServices } = require("../../services/profiles.service")
const bodyParser = require('body-parser')

const GetAll = async(req, res) => {

    try {

        const profiles = await Profiles.find({})
    
        res.status(200).json(profiles)

    } catch (err) {

        res.status(500).json(err)

    }

}

const GetOne = (req, res) => {
    
}

const Create = (req, res) => {

    console.log(req)

    const { name, email } = req.body

    ProfilesServices.Create({
        name,
        email
    })

    res.status(201).json()
}

const Update = (req, res) => {
    
}

const Delete = (req, res) => {
    
}

const AddExperience = (req, res) => {
    
}

const DeleteExperience = (req, res) => {
    
}

const AddSkill = (req, res) => {
    
}

const DeleteSkill = (req, res) => {
    
}

const UpdateInformation = (req, res) => {
    
}

module.exports = {
    ProfilesController: {
        AddExperience,
        AddSkill,
        Create,
        Delete,
        DeleteExperience,
        DeleteSkill,
        UpdateInformation,
        Update,
        GetOne,
        GetAll
    }
}