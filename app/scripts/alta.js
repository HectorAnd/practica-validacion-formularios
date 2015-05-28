'use strict';




$(document).ready(function() {
    $('#nombre , #apellido').change(function(evento){
        var texto = "";
       texto= $('#nombre').val()+ " " +$('#apellido').val();
       $('#nombre2').val(texto);
    });

    $('#particular').change(function(evento) {
       
        $('#name').text( 'Nombre');
        $('#documento').text('NIF');
          $('#cif').attr({
            name:'nif',
            id: 'nif'
        });
        var texto = "";
       texto= $('#nombre').val()+ " " +$('#apellido').val();
       $('#nombre2').val(texto);
      
    });
    $('#CP').focusout(function(evento){
        if($('#CP').val().length()===4){
            var text =0 + $('#CP').val();
            $('#CP').val(text);

        }
    });


    $('#empresa').change(function(evento) {
       
        $('#name').text( 'Empresa');
        $('#documento').text('CIF');
        var texto="";
        $('#nombre2').val(texto);
        $('#nif').attr({
            name:'cif',
            id: 'cif'
        });
        
    });


});

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
                required:true,
                nifES:true
            },
            cif: {
                required:true,
                cifES:true
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
               required: true,
               iban:true
            },
            usuario: {
               required: true,
               minlength: 4
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

