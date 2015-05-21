'use strict';
$(document).ready(function() {
    $('#frmalta').validate({
        rules: {
            nombre: {
                required: true

            },
            apellido:{

                required:true
            },
            nif:{
                nifES:true

            },
            
            telefono:{
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

            comentarios: {  
                required: true
            },

            url: {
                url: true
            },
            edad: {
                min:0,
                max:110
            }
        }
        
    });
});
$(document).ready(function() {
    $


});