import mongoose from "mongoose"
import dotenv from "dotenv";

//usado para estabelecer a conexeção com o bd mongo atlas e meu .env

// async function conectaDatabase(){
//   mongoose.connect(process.env.DB_CONNECT_STRING);

//   return mongoose.connection
// }

// export default conectaDatabase;

dotenv.config();

const DB_CONNECT_STRING = process.env.DB_CONNECT_STRING;

mongoose.connect(DB_CONNECT_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

let conectaDatabase = mongoose.connection;
export default conectaDatabase;
