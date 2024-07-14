import mongoose from "mongoose"

//usado para estabelecer a conexeção com o bd mongo atlas e meu .env

async function conectaDatabase(){
  mongoose.connect(process.env.DB_CONNECT_STRING);

  return mongoose.connection
}

export default conectaDatabase;