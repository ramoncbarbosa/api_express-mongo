import incorrectRequest from "../errors/incorrectRequest.js";

export default async function pagination(req, res, next){
  try{
    //metodos para paginação para mostrar quantos dados quero mostrar por pages com limite e page
    //ordenando a visualizacao dos dados, neste caso usando o id como ordem junto do valor decrscente que -1
    //use url: 3000/livros?ordenacao=titulo:1 or -1
    // http://localhost:3000/livros/busca?editora=Alura&ordenacao=titulo:1
    // http://localhost:3000/autores?limite=2
    let { limite = 10, page = 1, ordenacao = "_id:-1" } = req.query; 
    let [campoOrdernacao, ordem] = ordenacao.split(":");

    limite = parseInt(limite);
    page = parseInt(page);
    ordem = parseInt(ordem);
      
    const result = req.result;


    //usando metodo sort para ordernar por titulo, 1= crescente e -1 descrescente, se pode ordernar por outros dados, mas sempre 1 e -1
    if(limite > 0 && page > 0){
      const resultPagination = await result.find({})
        .sort({[campoOrdernacao]: ordem})
        .skip((page-1) * limite)
        .limit(limite)
        .exec();

      res.status(200).json(resultPagination);
    } else{
      next(new incorrectRequest());
    }
  } catch(erro){
    next(erro);
  }
}