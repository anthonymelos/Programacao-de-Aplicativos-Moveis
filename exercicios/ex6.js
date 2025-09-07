//Crie um objeto livro com propriedades: título, autor, páginas e um método mostrarInfo() que retorne uma string com todas as informações.


const livro = {
    titulo: 'Os Segredos da Mente Milionária',
    autor: 'Harv Eker',
    paginas: 210,
    monstrarinfo: function(){
        return `Livro: ${this.titulo}, Autor ${this.autor}, Páginas ${this.paginas}`
    }

}

console.log(livro.monstrarinfo())