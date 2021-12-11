const server = require("./src/app"),
  { conn } = require("./src/db"),
  xlxs = require("xlsx");
const { Estudiante, Instructor } = conn.models;

const excel_to_json = (dir) => {
  const excel = xlxs.readFile(dir);
  let datos = xlxs.utils.sheet_to_json(excel.Sheets[excel.SheetNames[0]]);
  return datos;
};

async function addEstudiantes(datos) {
  await Estudiante.bulkCreate(datos, {
    fields: ["dni", "name", "lastname", "address", "email"],
    ignoreDuplicates: false,
  });
}
async function addInstructores(datos) {
  await Instructor.bulkCreate(datos, {
    fields: ["dni", "name", "lastname", "address", "email"],
    ignoreDuplicates: false,
  });
}

conn.sync({ force: true }).then(async () => {
  const estudiantes = excel_to_json(`${__dirname}/src/estudiantes.xlsx`);
  const instructores = excel_to_json(`${__dirname}/src/instructores.xlsx`);
  addEstudiantes(estudiantes);
  addInstructores(instructores);
  server.listen(server.get("port"), () => {
    console.log(`Server is executed on port ${server.get("port")}`); // view on console
  });
});
