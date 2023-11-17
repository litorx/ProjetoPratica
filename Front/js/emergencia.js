document.addEventListener('DOMContentLoaded', function () {
  const botaoEmergencia = document.getElementById('botaoEmergencia');

  botaoEmergencia.addEventListener('click', function () {
    // Enviar uma requisição para o servidor quando o botão for clicado
    fetch('/emergencia', { method: 'GET' })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  });
});
