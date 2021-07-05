function pesquisar(){
    
    const selectService = document.querySelector('.form-select');
    const servico = selectService.options[selectService.selectedIndex];
    const cidade = document.querySelector('.form-control');

    if (cidade === '' || servico.value === 'Selecionar serviço') {
        const alerta = document.querySelector('.alerta');
        alerta.innerHTML = "<p>Insira dados válidos</p>";
        return;
    }
    window.location.assign("pages/ListaFiltrada/index.html");
}