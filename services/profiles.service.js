const Profiles = require("../database/models/profiles")

const FindById = (id) => {
    
}

/**
 * 
 * @param {{ name: String, email: String }} profile 
 */

const Create = async (profile) => {

    try {

        const profiles = await Profiles.create({

            email: profile.email,
            name: profile.name
        })

        return profiles

    } catch (err) {
        throw new Error(err)
    }
}

const Update = (profile_id) => {

}

const Delete = (profile_id) => {

}

const AddSkills = (profile_id) => {

}

const DeleteSkills = (profile_id, skill_id) => {
    
}

module.exports = {
    ProfilesServices: {
        Create,
        Delete,
        FindById,
        Update,
        AddSkills,
        DeleteSkills
    }
}