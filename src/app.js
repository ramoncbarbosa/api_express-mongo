import express from "express";

const app = express();

app.get("/", (req, res)=>{
  res.status(200).send("Curso de Express");
});

export default app;