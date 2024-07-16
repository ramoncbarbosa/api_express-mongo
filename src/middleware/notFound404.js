import notFound from "../errors/notFound.js";

export default function notFound404(req, res, next){
  const error404 = new notFound();
  next(error404);
}