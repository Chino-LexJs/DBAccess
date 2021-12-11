const { Router } = require("express");
const router = Router();
const {
  createEstudiante,
  getEstudiantes,
} = require("../controllers/estudiante.controller");

router.route("/").post(createEstudiante);

router.route("/").get(getEstudiantes);

module.exports = router;
