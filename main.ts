//1. Hace Falta la definicion de la interfaz de la clase
interface Estudiante{
    nombre: string;
    edad: number;
    curso: string;
    direccion: {};
    mostrarInfo: ()=> void;
}
const estudiante:Estudiante = {
    nombre: 'Juan',
    edad: 22,
    curso: 'Matemáticas',
    direccion: {
        calle: 'Av. Siempre Viva',
        ciudad: 'Bogotá',
        pais: 'Colombia'
    },
    mostrarInfo() {
        return `${this.nombre} estudia ${this.curso} en ${this.direccion.ciudad}`;
    }
};

console.log(estudiante.mostrarInfo());

//2. Hace falta definir la interfaz de la clase
interface Producto{
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    mostrarDetalle: ()=> void;
}

const producto:Producto = {
    id: 1,
    nombre: 'Laptop',
    precio: 3500,
    stock: 10,
    mostrarDetalle() {
        return `${this.nombre} cuesta $${this.precio} y hay ${this.stock} unidades disponibles`;
    }
};

console.log(producto.mostrarDetalle());

//3. Hace falta definir la interfaz de clase
interface Pelicula{
    titulo: string;
    director: string;
    duracion?: number;
    genero: string;
    reproducir: ()=> void;
}

const pelicula:Pelicula = {
    titulo: 'Avengers: Endgame',
    director: 'Anthony y Joe Russo',
    duracion: 181,
    genero: 'Accion',
    reproducir() {
        return `Reproduciendo: ${this.titulo} - Dirigida por ${this.director}`
    }
};

console.log(pelicula.reproducir());

//4. Hace falta definir la interfaz de clase
interface Vehiculo{
    marca: string;
    modelo: string;
    anio: number;
    encender: ()=> void;
}
const vehiculo:Vehiculo = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2022,
    encender() {
        return `${this.marca} ${this.modelo} esta encendido`
    }
};
console.log(vehiculo.encender());

//5. Hace falta definir la interfaz de clase
interface Usuario{
    username: string;
    password: string;
    roles: string[];
    login: ()=> void;
}
const usuario:Usuario = {
    username: 'admin01',
    password: '123456',
    roles: ['admin', 'editor'],
    login() {
        return `Usuario ${this.username} ha iniciado sesion con roles: ${this.roles.join(', ')}`;
    }
};
console.log(usuario.login());