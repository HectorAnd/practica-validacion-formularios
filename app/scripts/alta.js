'use strict';




$(document).ready(function() {
    $('#nombre , #apellido').change(function(evento) {
        var texto = "";
        texto = $('#nombre').val() + " " + $('#apellido').val();
        $('#nombre2').val(texto);
    });

 $('#email').change(function(evento) {
        var texto = "";
        texto = $('#email').val() 
        $('#usuario').val(texto);
    });




    $('#particular').change(function(evento) {

        $('#name').text('Nombre');
        $('#documento').text('NIF');
        $("#frmalta").validate().resetForm();
        $('#cif').attr({
            name: 'nif',
            id: 'nif'
        });
     var texto = "";
        texto = $('#nombre').val() + " " + $('#apellido').val();
        $('#nombre2').val(texto);



    });

     $("#CP").focusout(function() {
        var cp= $("#CP").val();
        var ceros=""
   
        if (cp.length <5){
          for (var i = cp.length; i < 5; i++) {
                ceros += "0";
            };
        }
        cp=ceros + cp;
        $("#CP").val(cp);
    });


    $('#empresa').change(function(evento) {

        $('#name').text('Empresa');
        $('#documento').text('CIF');
        var texto = "";
        $('#nombre2').val(texto);
        $("#frmalta").validate().resetForm();
        $('#nif').attr({
            name: 'cif',
            id: 'cif'
        });
        $('#nombre2').val(texto);

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
                required: true,
                nifES: true,
                remote: 'http://localhost/validarphp/validar_nif_db.php'
            },
            cif: {
                required: true,
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
                remote: 'http://localhost/validarphp/validar_email_db.php'

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
                iban: true
            },
            usuario: {
                required: true,
                minlength: 4
            },
            pass: {
                required: true
            },
            pass2: {
                equalTo: '#pass'
            }

        }

    });
});
