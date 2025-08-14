class Rectangulo {
    constructor(alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    
    calArea(unidad, nombreUnidad){
         return  this.alto*this.ancho*unidad+ nombreUnidad;
       
    }
}

const rectanguloObj = new Rectangulo(2,1);
console.log(`${rectanguloObj.calArea(1000,"km")} Este es el area pertence al ejemplo1`);

class Animal{
    constructor(nombre){
        this.nombre = nombre
    }
    hablar(){
        console.log(`${this.nombre} hacer un ruido`)
    }
}
class Perro extends Animal{
    hablar(){
        console.log(`${this.nombre} ladra pertence al ejemplo2`)
    }
}

const luna = new Perro("Luna")
luna.hablar()

class Punto {
    constructor(x,y){
        this.x = x
        this.y = y 
    }
    static distancia(a,b){
        const distanciaX= a.x - b.x
        const distanciaY= a.y - b.y
        return Math.sqrt(distanciaX*distanciaX + distanciaY*distanciaY)
    }
}

const p1 = new Punto(10,15)
const p2 = new Punto(20,30)
console.log(Punto.distancia(p1,p2),`Esta es la distancia entre ${p1} y ${p2}`)