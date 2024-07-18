import mongoose from "mongoose";
import baseError from "../errors/baseError.js";
import incorrectRequest from "../errors/incorrectRequest.js";
import ValidationError from "../errors/validationError.js";
// import notFound from "../errors/notFound.js";

//middleware de erro para tratamento de erros na aplicação de AuthorController e livroControoller
// eslint-disable-next-line no-unused-vars
export default function managerErros(erro, req, res, next){
  if(erro instanceof mongoose.Error.CastError){
    new incorrectRequest().sendReply(res);

  } else if(erro instanceof mongoose.Error.ValidationError){
    new ValidationError(erro).sendReply(res);

  } else if(erro instanceof baseError){
    erro.sendReply(res);

  }else{
    new baseError().sendReply(res);
  
  }
}