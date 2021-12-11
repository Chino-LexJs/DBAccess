const { Estudiante } = require("../db");

const createEstudiante = async (req, res) => {
  const { dni, name, lastname, address, email, password } = req.body;
  try {
    if ((dni, name, lastname, address, email, password)) {
      let newEstudiante = await Estudiante.create(
        {
          dni,
          name,
          lastname,
          address,
          email,
          password,
        },
        {
          fields: ["dni", "name", "lastname", "address", "email", "password"],
        }
      );
      res.json({
        data: newEstudiante,
        message: "Estudiante creado",
      });
    } else {
      res.status(500).json({
        data: error,
        message: "No se enviaron todos los parametros",
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

const getEstudiantes = async (req, res) => {
  try {
    let estudiantes = await Estudiante.findAll();
    res.json({
        data: estudiantes,
        message: "Listado de estudiantes"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error,
      message: "something goes wrong",
    });
  }
};

module.exports = { getEstudiantes, createEstudiante };
