document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); //Impedir o envio do formulário
  
    // Obtendo valores de formulário
    var name = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comentario').value;
  
  
    // Simular o envio de dados para o servidor
    setTimeout(function() {
      // Exibir mensagem de sucesso
      document.getElementById('status-message').textContent = 'Mensagem enviada com sucesso!';
  
      // Limpar campos do formulário
      document.getElementById('nome').value = '';
      document.getElementById('email').value = '';
      document.getElementById('comentario').value = '';
    }, 1000);  // Simulando atraso de 1 segundo para envio de dados
  });