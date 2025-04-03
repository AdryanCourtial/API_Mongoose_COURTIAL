const express = require("express")
const { ProfilesController } = require("./controllers/profiles.controller")
const router = express.Router()

router.get("/profiles", ProfilesController.GetAll)

router.get("/profiles/:id", ProfilesController.GetOne)

router.post("/profiles", ProfilesController.Create)

router.put("/profiles/:id", ProfilesController.Update)

router.delete("/profiles/:id", ProfilesController.Delete)

router.post("/profiles/:id/experience", ProfilesController.AddExperience)

router.delete("/profiles/:id/experience/:exp", ProfilesController.DeleteExperience)

router.get("/profiles/:id/skills", ProfilesController.AddSkill)

router.get("/profiles/:id/skills/:skill ", ProfilesController.DeleteSkill)

router.get("/profiles/:id/information", ProfilesController.UpdateInformation)

module.exports = router