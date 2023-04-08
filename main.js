$('document').ready(function () {
    // Máscara
    $('#cpf').mask('000.000.000-00', {
      placeholder: '000.000.000-00',
    });
    $('#telefone').mask('(00) 9 0000-0000', {
      translation: {
        9: {
          pattern: /[9]/,
          optional: false,
        },
      },
      placeholder: '(00) 9 0000-0000',
    });
    $('#cep').mask('00000-000', {
      placeholder: '00000-000',
    });
  
    // Validação
    $('form').validate({
      rules: {
        nome: {
          required: true,
        },
        cpf: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        telefone: {
          required: true,
        },
        cep: {
          required: true,
        },
        endereco: {
          required: true,
        },
      },
      messages: {
        nome: {
          required: 'Insira seu nome aqui',
        },
        telefone: {
          required: 'Insira seu telefone aqui',
        },
        email: {
          required: 'Insira seu e-mail aqui',
        },
        cpf: {
          required: 'Esse campo é obrigatório',
        },
        endereco: {
          required: 'Esse campo é obrigatório',
        },
        cep: {
          required: 'Esse campo é obrigatório',
        },
      },
    });
  });