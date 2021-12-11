const { Router } = require("express");
const router = Router();
const {
  createCurso,
  getCursos,
  addEstudiante,
} = require("../controllers/curso.controller");

router.route("/estudiante").post(addEstudiante);

router.route("/").post(createCurso);

router.route("/").get(getCursos);

module.exports = router;
