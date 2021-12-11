const { Instructor } = require("../db");

const createInstructor = async (req, res) => {
  const { dni, name, lastname, address, email } = req.body;
  try {
    if ((dni, name, lastname, address, email)) {
      let newInstructor = await Instructor.create(
        {
          dni,
          name,
          lastname,
          address,
          email,
        },
        {
          fields: ["dni", "name", "lastname", "address", "email"],
        }
      );
      res.json({
        data: newInstructor,
        message: "Instructor creado",
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

const getInstructores = async (req, res) => {
  try {
    let instructores = await Instructor.findAll();
    res.json({
      data: instructores,
      message: "Listado de instructores",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: error,
      message: "something goes wrong",
    });
  }
};

module.exports = { getInstructores, createInstructor };
