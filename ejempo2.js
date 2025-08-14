const estanteria1 = []
const pidiendoLibro = true
class Libro {
    constructor(titulo, autor, isbn, genero, disponible) {
        this.titulo = titulo
        this.autor = autor
        this.isbn = isbn
        this.genero = genero
        this.disponible = disponible
    }
}
class Admin {
    constructor(contraseña) {
        this.contraseña = contraseña
    }
    darLibro(Usuario, libroPrestar, estanteria) {
        console.log(`${libroPrestar.titulo} prestado a ${Usuario}`)
        return console.log(`Quedan ${estanteria.length} libros disponibles`)
    }
    rellenarEstanteria(estanteria, l1, l2, l3, l4, l5) {
        estanteria.push(l1, l2, l3, l4, l5)
        return console.log(`Estanteria con ${estanteria.length} libros`)
    }
}
class Usuario {
    constructor(nombre, email, librosPrestados, entrarBiblioteca) {
        this.nombre = nombre
        this.email = email
        this.librosPrestados = librosPrestados
        this.entrarBiblioteca = entrarBiblioteca
    }

    pedirLibro(libro, estanteria) {
        if (libro.disponible) {
            estanteria.forEach(libroFE => {
                if (libroFE.titulo == libro.titulo) {
                    libro.disponible == false
                    admin.darLibro(this.nombre, libro, estanteria)
                    this.librosPrestados = [libro]
                    estanteria = estanteria.filter(elemento=>elemento=libro.titulo)
                }
            });

        } else {
            console.log("Libro no disponible")
        }

    }

    consultarLibro(estanteria) {
        console.log("Estos son los libros disponibles------")
        estanteria.forEach(libro => {
            if (libro.disponible) {
                console.log(libro.titulo)
            }
        });
        console.log("-----------------------------------")
    }
}

let Daniela = new Usuario("Daniela", "daniela@gmail.com", 0, false)
const admin = new Admin("12345678")
const biblia = new Libro("Biblia", "Anthony", 11111, "fantasia", true)
const Emeily = new Libro("Emeily", "Martha J.M", 22222, "Terror", true)
const baldor = new Libro("Algebra con baldor", "Baldor", 33333, "Educativo", true)
const php = new Libro("PhP desde 0", "Zuckenberg", 44444, "Educativo", true)
const desquiciada = new Libro("La noche desquiciada", "Charles B.", 55555, "Poesia", true)

admin.rellenarEstanteria(estanteria1, biblia, Emeily, baldor, php, desquiciada)

Daniela.pedirLibro(baldor, estanteria1)
console.log(Daniela.librosPrestados)
console.log("--------------------------------",estanteria1)