import express from "express";
import conectaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import erroHandler from "./middleware/erroHandler.js";
import notFound from "./middleware/notFound404.js";

conectaDatabase.on("error", console.log.bind(console, "Erro de Conexão"));
conectaDatabase.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

//colocado ao fim para caso nenhuma das rotas seja atendida, retorne o not found
app.use(notFound);

//middleware que faz o tratamento de error referente as aplicações de AuthorController e livroControoller
app.use(erroHandler);

export default app;