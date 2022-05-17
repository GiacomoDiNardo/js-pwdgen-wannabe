const userName = prompt('Inserisci il tuo nome');
const userSurname = prompt('iserisci il tuo cognome');
const userColor = prompt('Qual è il tuo colore preferito?');
const year = "22"

const spanPassword = document.getElementById('user-password');
spanPassword.innerHTML = `<strong>La tua password è:</strong> ${userName}${userSurname}${userColor}${year}`;