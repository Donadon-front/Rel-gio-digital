const horas = document.getElementById('Horas');
const minutos = document.getElementById('Minutos');
const segundos = document.getElementById('Segundos');

const relogio = setInterval(function () {
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let segundo = dateToday.getSeconds();

    if (hora < 10) hora = '0' + hora;
    if (minuto < 10) minuto = '0' + minuto;
    if (segundo < 10) segundo = '0' + segundo;

    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;
}, 1000);  
