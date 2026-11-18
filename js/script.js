const btn = document.getElementById('btn-seguir');

btn.addEventListener('click', () => {
    if (btn.textContent === 'Seguir') {
        btn.textContent = 'Seguindo';
        btn.classList.add('seguindo');
    } else {
        btn.textContent = 'Seguir';
        btn.classList.remove('seguindo');
    }
});