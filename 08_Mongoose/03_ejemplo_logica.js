var apiLibro = require("./03_ejemplo_crud");

apiLibro.saveLibro({
    titulo: "El guardian entre el centeno",
    autor: "El autor del libro",
});
apiLibro.saveLibro({
    titulo: "El señor de los anillos",
    autor: "JRR Tolkien",
});
apiLibro.saveLibro({
    titulo: "El lobo estepario",
    autor: "Hermann Hesse",
});

//var libros = apiLibro.getLibros(2);
var libro = apiLibro.getLibroById("5900801b43c4f50e4814cda6");
console.log(libro);


apiLibro.updateLibro(libro._id, "autor", "Nuevo autor");

var libro = apiLibro.getLibroById("5900801b43c4f50e4814cda6");
console.log(libro);