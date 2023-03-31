const botao = document.getElementById('botao-login');
const email = document.getElementById('email');
const senha = document.getElementById('password');
const check = document.querySelector('#agreement');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function decrement() {
  const textLength = textarea.value.length;
  counter.innerHTML = 500 - textLength;
}
textarea.addEventListener('keyup', decrement);

check.addEventListener('click', () => {
  document.querySelector('#submit-btn').disabled = false;
});

botao.addEventListener('click', function () {
  const emailCliente = 'tryber@teste.com';
  const senhaCliente = '123456';

  if (email.value === emailCliente && senha.value === senhaCliente) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
