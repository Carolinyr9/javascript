class Post {
    constructor(titulo, mensagem, autor){
        this.titulo = titulo;
        this.mensagem = mensagem;
        this.autor = autor;
        this.vizualizações = 0;
        this.comentarios = [];
        this.estaAovivo = false;
    }
}

var post1 = new Post('a', 'b', 'c')

 console.log(post1)