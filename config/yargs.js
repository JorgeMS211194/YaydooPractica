const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .check( ( argv , option ) => {
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero';
                    }
                    //si no hay error regresa un true
                    return true;
                })
                .option('l', {
                    alias:'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la base en consola'
                })
                .option('h',{
                    alias:'hasta',
                    type: 'number',
                    default: 10,
                    //demandOption:true,
                    describe: 'Solo se aceptan números enteros'
                })
                .check((argv,option) => {
                    if(argv.h < 0 || isNaN(argv.h)) throw 'El valor hasta deve de ser un numero mayor igual a 0';

                    return true;
                })
                .argv;


                //esto es para importar todo lo que esta aqui en yargs
module.exports = argv;