let salarioBasico=1200
class Empleado{
    constructor(nombre,salarioBase){
        this.nombre=nombre
        this.salarioBase=salarioBase
    }
    calcularSalario(){
        let salario=this.salarioBase
        return salario
    }
    static contarEmpleados(listaEmpleados){
        return listaEmpleados.length 
    }
    static calcaularParafiscales(){
        let parteEmpleado= salarioBasico*0.08
        let parteEmpresa= salarioBasico*0.16
        let parafiscales = parteEmpleado+parteEmpresa
        return parafiscales
    }
}

class Gerente extends Empleado{
    calcularSalario(){
        let descuento = salarioBasico*0.08
        let salarioFinal=(salarioBasico+1000)-descuento
        return salarioFinal
    }

}

class Desarrollador extends Empleado{
    calcularSalario(){
        let descuento = salarioBasico*0.08
        let salarioFinal=(salarioBasico+500)-descuento
        return salarioFinal
    }
}

const empleado1 = new Gerente("Hector Lavoe",salarioBasico)
const empleado2= new Desarrollador("Juanito Alimaña",salarioBasico)
const empleado3= new Desarrollador("Pedro Navaja",salarioBasico)

let pyme=[empleado1,empleado2,empleado3]

console.log(`la empresa "pyme" tiene ${Empleado.contarEmpleados(pyme)} empleados`)
console.log(`${empleado1.nombre} es un ${empleado1.constructor.name} y se gana ${empleado1.calcularSalario()}$`)
console.log(`la empresa "pyme" tiene que pagar ${Empleado.calcaularParafiscales()}$ de parafiscales a sus empleados`)
//valor a pagar de la nomina de cada uno y un metodo estatico  16% de la 