'use strict';
$(document).ready(function() {
    $('#frmalta').validate({
        rules: {
            nombre: {
                required: true

            },
            apellido: {

                required: true
            },
            nif: {
                nifES: true,
                cifES: true

            },

            telefono: {
                required: true,
                digits: true,
                minlength: 9,
                maxlength: 9

            },
            email: {
                email: true,
                required: true,

            },
            email2: {
                equalTo: '#email'
            },

            direccion: {
                required: true
            },

            nombre2: {
                required: true
            },
            CP: {
               required: true,
               digits: true,
               maxlength: 5

            },
            localidad: {
               required: true
            },
            provincia: {
               required: true
            },
            pais: {
               required: true
            },
            cuenta: {
               required: true
            },
            usuario: {
               required: true
            },
            pass: {
               required: true
            },
            pass2: {
               equalTo:'#pass'
            }




        }

    });
});
$(document).ready(function() {

    $('#particular').change(function(evento) {
       
        $('#name').text( 'Nombre');
        $('#documento').text('NIF')
      
    });


    $('#empresa').change(function(evento) {
       
        $('#name').text( 'Empresa');
        $('#documento').text('CIF')
      
    });


});
