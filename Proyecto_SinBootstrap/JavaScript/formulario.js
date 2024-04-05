/*Validar que se se llene correctamente el formulario*/
$(function(){
    $('#validateForm').validate({
        rules: {
            nombre: {
                required :true,
                minlength:3,
                maxlength: 10
            },
            correo: {
                required :true,
                email :true
            },
            telefono: {
                required :true,
                minlength:8,
                maxlength: 8
            },
        },
        messages:{
            nombre: {
                required :"Este campo es requerido",
                minlength:"Debe incluir al menos 3 caracteres",
                maxlength: "Debe incluir al menos 10 caracteres"
            },
            correo: {
                required :"Este campo es requerido",
                email :"Debe introducir una dirrecion de correo valida "
            },
            telefono: {
                telefono: "Ingrese un valor válido",
                required :"Este campo es requerido",
                minlength:"Debe incluir al menos 8 digitos",
                maxlength: "No debe pasarse de 8 digitos",
            },
        }
    });
})

