require("dotenv").config();
const express = require("express"),
  morgan = require("morgan"),
  cors = require("cors");
const instructorRouter = require("./routes/instructor"),
  estudianteRouter = require("./routes/estudiante"),
  cursoRouter = require("./routes/curso");
const { PORT } = process.env;
const server = express();

// settings
server.name = "API";
server.set("port", PORT);

// middlewares
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));

// routes
server.use("/instructores", instructorRouter);
server.use("/estudiantes", estudianteRouter);
server.use("/cursos", cursoRouter);

module.exports = server;
