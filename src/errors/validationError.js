import incorrectRequest from "./incorrectRequest.js";

export default class ValidationError extends incorrectRequest{
  constructor(error){
    
    //fazendo um tratamento de erros pegando o que vier no terminal/node e mapeando eles para guardadar e juntar todos dentro da variavel messageError
    //isso deixar o erro mais compreensível para o front-end
    const messageError = Object.values(error.errors)
      .map(erro => erro.message)
      .join("; ");

    super(`Os Seguintes Erros Foram Encontrados: ${messageError}`);
  }
}