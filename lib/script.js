$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false,
            },
        },
        messages: {
            nome: 'Por favor, insira um nome valido',
            email: 'Por favor, insira um email valido',
        },
        submitHandler: function(form){
            console.log(form)
        },
    })
})