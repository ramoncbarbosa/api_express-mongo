import baseError from "./baseError.js";

export default class incorrectRequest extends baseError{
  constructor(){
    super( "Um Ou Mais Dados Fornecidos Estão Incorretos", 400);
  }
}