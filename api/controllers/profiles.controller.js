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

const GetOne = async (req, res) => {
    const { id } = req.params

    try {

        const profiles = await Profiles.findById({
            _id: id
        })
    
        res.status(200).json(profiles)

    } catch (err) {

        res.status(500).json(err)

    }
}

const Create = (req, res) => {


    const { name, email } = req.body

    ProfilesServices.Create({
        name,
        email
    })

    res.status(201).json()
}

const Update = async (req, res) => {

    const { id } = req.params
    const { name, email } = req.body

    const profilesUpdated = await Profiles.findOneAndUpdate({
        _id: id
    }, 
    {
        $set: {
            name: name,
            email: email
        }
    }, 
    {
        new: true
    })

    res.status(200).json(profilesUpdated)

}

const Delete = async (req, res) => {
    const { id } = req.params

    const profilesDelated = await Profiles.findOneAndUpdate({
        _id: id
    }, {
        $set: {
            is_delated: true
        }
    }, {
        new: true
    })

    res.status(200).json(profilesDelated)
    
}

const AddExperience = async (req, res) => {
    const { experience } = req.body
    const { id } = req.params

    const addExperience = await Profiles.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                experience: {
                    ...experience
                }
            }
        },
        {
            new: true
        }
    )

    res.status(201).json(addExperience)
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