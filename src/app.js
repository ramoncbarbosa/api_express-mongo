import express from "express";
import conectaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

conectaDatabase.on("error", console.log.bind(console, "Erro de Conexão"));
conectaDatabase.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

export default app;