const { Curso, Instructor, Estudiante } = require("../db");

// Services
const cursoExsiste = async (day, hour, instructorDni) => {
  let curso = await Curso.findOne({
    where: {
      day: day,
      hour: hour,
      instructorDni: instructorDni,
    },
  });
  return curso;
};

const createCurso = async (req, res) => {
  const { name, day, hour, duration, instructorDni } = req.body;
  try {
    if (
      (name, day, hour, duration) &&
      !(await cursoExsiste(day, hour, instructorDni))
    ) {
      let newCurso = await Curso.create(
        {
          name,
          day,
          hour,
          duration,
        },
        {
          fields: ["name", "day", "hour", "duration"],
        }
      );
      await newCurso.setInstructor(instructorDni);
      res.json({
        data: newCurso,
        message: "Curso creado",
      });
    } else {
      res.status(500).json({
        message: "No se enviaron todos los parametros o Curso ya existe",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error,
      message: "something goes wrong",
    });
  }
};

const addEstudiante = async (req, res) => {
  try {
    const { estudianteDni, cursoId } = req.body;
    console.log(estudianteDni);
    let curso = await Curso.findOne({
      where: {
        id: cursoId,
      },
    });
    console.log(curso);
    await curso.addEstudiante(estudianteDni);
    res.json({
      data: curso,
      message: `Estudiante agregado al Curso: ${curso.dataValues.name}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error,
      message: "something goes wrong",
    });
  }
};

const getCursos = async (req, res) => {
  try {
    let cursos = await Curso.findAll({
      include: [
        {
          model: Instructor,
        },
        {
          model: Estudiante,
        },
      ],
    });
    res.json({
      data: cursos,
      message: "Listado de Cursos",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error,
      message: "something goes wrong",
    });
  }
};

module.exports = { getCursos, createCurso, addEstudiante };
