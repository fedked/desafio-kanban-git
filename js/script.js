const btnSeguir = document.getElementById('btn-seguir');

btnSeguir.addEventListener('click', () => {
    if (btnSeguir.textContent === 'Seguir') {
        btnSeguir.textContent = 'Seguindo';
        btnSeguir.classList.add('seguindo');
    } else {
        btnSeguir.textContent = 'Seguir';
        btnSeguir.classList.remove('seguindo');
    }
});

const btnTema = document.getElementById('btn-tema');
const body = document.body;

btnTema.addEventListener('click', () => {
    body.classList.toggle('light-mode');
});