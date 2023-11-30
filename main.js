/* O JQuery funciona através do $(informamos o elemento/seletor - no caso abaixo o document) .ready - Significa, quando já carregou o javascript e ja carregou o jquery, ele executa o alert('Hello JQuery') tudo que queremos do JQuery deve ser colocado dentro do espaço */

$(document).ready(function (a){
  $('header button').click(function() { //Adicionando evento através de JQuery, preceba que o código é muito mais otimizado
    $('form').slideDown();
  })

  $('#botao-cancelar').click(function(){
    $('form').slideUp();
  })

  $('form').on('submit', function(e){
    e.preventDefault();
    const enderecoDaNovaImagem = $('#endereco-novo').val(); //Recuperar o valor com JQuery usamos o .val() - No JS usamos o .value
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem); // O .appendTo() pega o elemento `<img src="${enderecoDaNovaImagem}"/>` e o adiciona dentro da tag <li></li>
    $(`
      <div class="overlay-imagem-link">
        <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
          Ver imagem em tamanho real
        </a>
      </div>
      `).appendTo(novoItem);
      $(novoItem).appendTo('ul');
      $(novoItem).fadeIn(700);
      $('#endereco-novo').val(' ');
  })
  })

  




