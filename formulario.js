$(document).ready(function () {
    $("#formulario").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            email: {
                required: true,
                email: true
            },

            rut: {
                required: true,
                number: true,
                minlength: 8,
                maxlength: 9
            },

            telefono: {
                minlength: 8,
                maxlength: 9
            },

            city: {
                required: true
            },

            comentario: {
                required: true,
                minlength: 50

            },
        },

        messages: {
            nombre: {
                required: "Ingresa tu nombre",
                minlength: "Nombre demasiado corto",
                maxlength: "Nombre demasiado largo"
            },
            email: {
                required: "Ingresa tu email",
                email: "Ingresa un email valido"
            },

            rut: {
                required: "Ingresa tu rut",
                minlength: "Rut no valido",
                maxlength: "Rut no valido",
                number: "Rut no valido"
            },

            telefono: {
                minlength: "Ingresa un numero valido",
                maxlength: "Ingresa un numero valido"
            },

            city: {
                required: "Selecciona ciudad"
            },

            comentario: {
                required: "Ingresa tu comentario",
                minlength: "Ingresa mínimo 50 caracteres"

            }


        }

    }
    )
});

$("#nombre").focus(function () {
    if ($("#nombre") == "") {
        console.log("hola jejejeje")
    }

});


$("#enviar").click(function () {


    var nombre = $("#nombre").val()
    var email = $("#email").val()
    var rut = $("#rut").val()
    var telefono = $("#telefono").val()
    var city = $("#city").val()
    var comentario = $("#comentario").val()
    console.log("hola gente")
});
