/***************USANDO YARGS***************/
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

//console.log(process.argv);
//console.log(argv);

//console.log('base: yargs',argv.b);


console.log(argv);
crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));

// /*
// //vamos a utilizar el FileSystem (fs)

// //importamos la libreria FileSystem
// const fs = require('fs');

// console.clear();
// const tabla = 5;
// //creamos una variable para poder almacenar la informacion a guardar en el txt
// let salida = `===============
// TABLA DEL ${tabla}
// ===============
// `;

// for (let index = 1; index <= 10; index++)
//     salida +=  `${ tabla } * ${ index } = ${ tabla * index }\n`;

//     console.log( salida );   

//     fs.writeFile(`tabla-del-${ tabla }.txt`,salida,'utf8', (err) =>{
//         if (err) throw err;

//         console.log(`tabla-del-${ tabla } ha sido creada.`);
//     })
// */

// // /**********************WRITEFILESYNC************************/

// // //vamos a utilizar la POO importando la clase de MULTIPLICAR.js

// // //aqui estamos utilizando desestructuracion, ya que el module.export es un arreglo y dentro de ese arreglo solo estamos obteniendo un valor (funcion)
// // const {crearArchivo} = require('./helpers/multiplicar');

// // console.clear();

// // const tabla = 2;

// // crearArchivo(tabla)
// //     .then(archivo => console.log(archivo))
// //     .catch(err => console.log(err))


// /********************RECUPERAR INFORMACION DESDE LA CONSOLA*********************/

// const {crearArchivo} = require('./helpers/multiplicar');

// console.clear();

// //recuperamos los datos introducidos por el usuario desde la consola de node 
// //ejemplo: node --base=5

// //aqui obtenemos un json en donde podremos ver lo que el usuario introduzca desde la consola 
// //--base = 5
// ////console.log(process.argv);
// //aplicamos desestructuracion
// //txtBase = --base=5;
// //agregamos un valor por default por si el usuario no introduce nada
// const [ , , txtBase = 'base=5'] = process.argv;
// //aqui recuperamos solo el valor // --base=5 
// //el valor es 5
// const [ , base = 5 ] = txtBase.split('=');

// //aqui ya tenemos el puro valor numerico que necesitamos (5)
// //y se lo mandamos a la funcion async
// crearArchivo(base)
//     .then(archivo => console.log(archivo))
//     .catch(err => console.log(err))