/*'use strict';*/




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

 //verifica la seguridad de la passsword con plugin complexify
    $('#complexify #pass').complexify({}, function(valid, complexity) {
        var progressBar = $('#complexify #complexity-bar');

        progressBar.toggleClass('progress-bar-success', valid);
        progressBar.toggleClass('progress-bar-danger', !valid);
        progressBar.css({
            'width': complexity + '%'
        });

        $('#complexify #complexity').text(Math.round(complexity) + '%');
    });



    

    $("#CP").focusout(function() {
        var cp = $("#CP").val();
        var ceros = ""

        if (cp.length < 5) {
            for (var i = cp.length; i < 5; i++) {
                ceros += "0";
            };
        }
        cp = ceros + cp;
        $("#CP").val(cp);
        var dato = $("#CP").val();
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "php/validar_zip_db.php",
            data: {
                zip: dato
            },
            success: function(msg) {


                $("#provincia").val(msg[0].provincia);
            }
        });


        $.ajax({
            url: "php/localidad.php",
            type: "POST",
            data: "zip=" + $("#CP").val(),
            success: function(opciones) {
                $("#localidad").html(opciones);
            }
        });

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
                remote: 'php/validar_nif_db.php'
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
                remote: 'php/validar_email_db.php'

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
