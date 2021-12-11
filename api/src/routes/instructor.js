const { Router } = require("express");
const router = Router();
const {
  createInstructor,
  getInstructores,
} = require("../controllers/instructor.controller");

router.route("/").post(createInstructor);

router.route("/").get(getInstructores);

module.exports = router;
