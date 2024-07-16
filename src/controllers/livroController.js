import Livro from "../models/Livro.js"; 

class LivroController {
    static async listarLivros(req, res) {
        try {
            const listaLivros = await Livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na Requisição` });
        }
    }

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroLocalizado = await Livro.findById(id);
            res.status(200).json(livroLocalizado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na Requisição de Buscar o Livro` });
        }
    }

    static async CadastrarLivros(req, res) {
        try {
            const newBook = await Livro.create(req.body);
            res.status(201).json({ message: 'Criado com sucesso', livro: newBook });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na Requisição` });
        }
    }

    static async atualizarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            await Livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Atualização Realizada Com Sucesso!' });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na Atualização do Livro` });
        }
    }

    static async deleteBook(req, res) {
        try {
            const id = req.params.id;
            await Livro.findByIdAndDelete(id);
            res.status(200).json({ message: 'Livro Deletado com Sucesso!' });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao Deletar o Livro` });
        }
    }

    //parametro para usar query para buscar uma editora
    static async listarLivrosPorEditora(req, res){
        const editora = req.query.editora;
        try{
            const livrosPorEditora = await Livro.find({editora: editora});
            res.status(200).json(livrosPorEditora);
        } catch(erro){
            res.tatus(500).json({message: `${erro.message} - Não Encontrado`})
        }
    }
}

export default LivroController;
