import baseError from "./baseError.js";

export default class notFound extends baseError{
  constructor(message="Falha na Requisição de Buscar o Autor, o ID Não Foi Lozalicado"){
    super(message, 404);
  }
}