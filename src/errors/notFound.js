import baseError from "./baseError.js";

export default class notFound extends baseError{
  constructor(){
    super("Falha na Requisição de Buscar o Autor, o ID Não Foi Lozalicado", 404);
  }
}