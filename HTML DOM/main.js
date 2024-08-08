document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);
    var messageDiv = document.getElementById('message');

    if (campoB > campoA) {
        messageDiv.textContent = "Formulário válido! O número B é maior que o número A.";
        messageDiv.className = "message success";
    } else {
        messageDiv.textContent = "Formulário inválido. O número B deve ser maior que o número A.";
        messageDiv.className = "message error";
    }
});