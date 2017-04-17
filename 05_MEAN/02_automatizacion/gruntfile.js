module.exports = function(grunt) {

    let configuracion = {
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            min: {
                src: '<%= pkg.name %>.js', //Ponemos que queremos acceder al fichero pkg y a la propiedad name
                dest: '<%= pkg.name%>.min.js' //Este será el fichero destino minificado
            }
        },
        watch: {
            scripts: {
                files: ["./*.js"], //fichero actual donde todos los ficheros que acaben el js
                tasks: ["uglify"], //cada vez que se cambia un fichero se ejecuta la tarea uglify
                options: {
                    spawn: false
                }
            }
        },
        concat: { //Para concatenar ficheros en uno solo
            options: {
                separator: "\n//-------------------\n"
            },
            dist: {
                src: ["./*.js"],
                dest: '<%= pkg.name%>.todo.js'
            }
        }
    };

    grunt.initConfig(configuracion);
    grunt.loadNpmTasks('grunt-contrib-uglify'); //Cargamos el plugin instalado
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('comprime', ['uglify']); //Registramos la tarea 
    //grunt.registerTask('minificar', ['uglify']); //Registramos la tarea minificar y se llama en consola con... //grunt minificar
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('concatenar', ['concat']);

    //Gestion de eventos
    function enUnCambio(accion, rutaFichero, destino) {
        grunt.log.writeln(destino + ": " + rutaFichero + " tiene " + accion);
    }

    grunt.event.on("watch", enUnCambio); //Cuando se ejecuta la tarea watch, se llama a la funcion enUnCambio
};