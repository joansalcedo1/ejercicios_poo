class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }

    descubrir() {
        let desc = "Este es un vehiculo, tiene 1 motor y ruedas. Esta hecho para movilizarte por la ciudad"
        return console.log("Descripción: ", desc)
    }

    esMotorizado() {
        let motor = true
        return motor
    }
}

class Auto extends Vehiculo {
    descubrir() {
        let desc = "Este es un automovil, tiene 4 ruedas y puertas, 2 espejos y 1 motor"
        return console.log("Descripción: ", desc)
    }
}

class Bicicleta extends Vehiculo {
    descubrir() {
        let desc = "Este es una bicicleta, tiene 2 ruedas y 1 sillin"
        return console.log("Descripción:", desc)
    }
    esMotorizado() {
        let motor = false
        return motor
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function marcas() {
    let marcasBici = ["Scott", "Trek", "Orbea", "Giant", "Canyon"]
    let marcasCarro = ["Wolkswagen", "Bmw", "Audi", "Chevrolet","Nissan"]
    let numeroRandom = getRandomInt(0, 4)
    let marcaEscogidaB = marcasBici[numeroRandom]
    let marcaEscogidaV = marcasCarro[numeroRandom]
    let marcasEscogidas = [marcaEscogidaB, marcaEscogidaV]
    return marcasEscogidas
}
function hacerTodo(inputM, inputNM) {
    let vehiculos = []

    let motorizados = []
    let noMotorizados = []

    for (let i = 0; i < inputM; i++) {
        let marcaM
        [marcaNM, marcaM] = marcas()
        const veh = new Auto(marcaM, getRandomInt(1990, 2026))
        vehiculos.push(veh)
    }

    for (let i = 0; i < inputNM; i++) {
        let marcaNM
        [marcaNM, marcaM] = marcas()
        const veh = new Bicicleta(marcaNM, getRandomInt(2004, 2025))
        vehiculos.push(veh)
    }

    vehiculos.forEach(element => {
        if (element.esMotorizado()) {
            noMotorizados.push(element)
            vehiculos = vehiculos.filter(vehiculo => vehiculo != element)
        } else {
            motorizados.push(element)
            vehiculos = vehiculos.filter(vehiculo => vehiculo != element)

        }
    });
    console.log("motorizados: ", motorizados)
    console.log("No motorizados: ", noMotorizados)
    console.log("vehiculos en cola: ", vehiculos)
}

let inputM = 5
let inputNM = 10

hacerTodo(inputM, inputNM)