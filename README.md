# Programación Orientada a Objetos en JavaScript

Este repositorio contiene **4 ejercicios prácticos** de Programación Orientada a Objetos (POO) en JavaScript, enfocados en el uso de **clases, herencia, métodos, atributos, métodos estáticos** y manipulación de datos.

Cada archivo aborda un caso de uso diferente, simulando situaciones reales para reforzar conceptos clave de la POO.

---

## 📂 Contenido del repositorio

1. **`ejemploPOO.js`**
   - Ejemplos básicos de clases y métodos.
   - Implementación de:
     - Clase `Rectangulo` con cálculo de área.
     - Jerarquía `Animal` → `Perro` con sobreescritura de métodos.
     - Clase `Punto` con un método estático para calcular la distancia entre dos puntos.
   - **Conceptos vistos:** constructores, herencia, sobreescritura de métodos, métodos estáticos.

2. **`ejempo2.js`**
   - Simulación de un sistema de **biblioteca**.
   - Clases:
     - `Libro`: datos y estado de disponibilidad.
     - `Admin`: gestión de la estantería y préstamo de libros.
     - `Usuario`: solicitud y consulta de libros.
   - **Conceptos vistos:** composición de objetos, control de estado (`disponible`), interacción entre instancias.

3. **`sistemaVehiculos.js`**
   - Sistema de clasificación de **vehículos motorizados y no motorizados**.
   - Clases:
     - `Vehiculo` (clase base)
     - `Auto` y `Bicicleta` (heredan de `Vehiculo` y sobrescriben métodos).
   - **Conceptos vistos:** herencia, polimorfismo, filtrado y clasificación de objetos en listas.

4. **`sistemaDeEmpleados.js`**
   - Gestión de **empleados** y cálculo de salarios.
   - Clases:
     - `Empleado` (base)
     - `Gerente` y `Desarrollador` (heredan y modifican la lógica de cálculo de salario).
   - Métodos estáticos para:
     - Contar empleados.
     - Calcular parafiscales.
   - **Conceptos vistos:** herencia, métodos estáticos, cálculos específicos por rol.

---

## 🚀 Ejecución de los ejemplos

1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/poo-ejercicios.git
   cd poo-ejercicios
2.Ejecuta cada archivo individualmente con Node.js:

node ejemploPOO.js
node ejempo2.js
node sistemaVehiculos.js
node sistemaDeEmpleados.js

🛠 Tecnologías utilizadas
--
JavaScript (ES6+)

Node.js para la ejecución en entorno local.

🎯 Objetivo de aprendizaje
--
Aplicar conceptos fundamentales de POO en JavaScript.

Practicar la creación y uso de clases, herencia, métodos estáticos y sobreescritura de métodos.

Implementar simulaciones de casos reales para fortalecer la lógica y el diseño de software.
