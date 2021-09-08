// const fs = require('fs');

// const crearArchivo = (tabla = 5) =>{

//     let salida = `===============
// TABLA DEL ${tabla}
// ===============
// `;

//     for (let index = 1; index <= 10; index++){
//         salida +=  `${ tabla } * ${ index } = ${ tabla * index }\n`;
//         console.log(salida)
//     }

//     //utilizando el writeFileSync // nombre archivo nuevo + datos a almacenar en el archivo
//     fs.writeFileSync(`tabla-del-${ tabla }.txt`,salida);

// };

// //con esto podemos exportar las funciones que esten en esta clase js
// module.exports = {
//     //aqui vamos a exportar o configurar los metodos/funtions a utilizar el la otra clase (cualsea)
//     //crearArchivo : crearArchivo
//     crearArchivo,//aqui el nombre es redundante asi que solo podemos dejar un nombre y ES6 determinara que existe una funcion con ese nombre
// }


/***********TRANSFORMANDO LA FUNCION A PROMESA**************/

const fs = require('fs');

//  //Convertimos la funcion en una promesa

// const crearArchivo = (tabla = 5) =>{

//     return new Promise((resolve,reject) => {
//         let salida = `
//         ===============
//         TABLA DEL ${tabla}
//         ===============
// `;
    
//     for (let index = 1; index <= 10; index++)
//         salida +=  `${ tabla } * ${ index } = ${ tabla * index }\n`;
    
//         fs.writeFileSync(`tabla-del-${ tabla }.txt`,salida);
//         resolve(`Se creo la tabla del ${tabla} correctamente`)
//     })

// };

var colors = require('colors');
//Convertimos la funcion en una ASYNC

const crearArchivo = async(tabla = 5, l,h) =>{

    try {
        let salida = '';
    
    for (let index = 1; index <= h; index++)
        salida +=  `${ colors.yellow(tabla) } ${'*'.red} ${ colors.yellow(index) } ${'='.green} ${ tabla * index }\n`;
    
        if(l){
            console.log('==============='.green);
            console.log('  TABLA DEL'.yellow, colors.yellow(tabla));
            console.log('==============='.green);
            console.log(salida);
        }

        fs.writeFileSync(`./Salida/tabla-del- ${ tabla }.txt`,salida);

        return `Se creo la tabla del ${tabla} correctamente`.yellow;

    } catch (error) {
        throw colors.red(error); 
    }

};

module.exports = {
    crearArchivo,
}