const cuantoFalta = deadline => {

    let now = new Date(),
        tiempoFaltante = (new Date(deadline) - now + 1000) / 1000,
        faltanteSegundos = ('0'+ Math.floor(tiempoFaltante % 60)).slice(-2),
        minutosFaltantes = ('0'+ Math.floor(tiempoFaltante / 60 % 60)).slice(-2),
        horasFaltantes = ('0'+ Math.floor(tiempoFaltante / 3600 % 24)).slice(-2),
        diasFaltantes = Math.floor(tiempoFaltante / (3600 * 24));


return {
    tiempoFaltante,
    faltanteSegundos,
    minutosFaltantes,
    horasFaltantes,
    diasFaltantes
}

};

const countdown = (deadline, elemental, mensajeFinal) =>{
    const elem = document.getElementById("tuercaReloj");

    const timerUpdate = setInterval( () => {
        let tiempo = cuantoFalta(deadline);
        document.getElementById("cholito").innerHTML = `<div class="bloque-dias"><span>${tiempo.diasFaltantes}&nbsp;<br>Días</span></div>&nbsp;
        <div class="bloque-horas"><span>${tiempo.horasFaltantes}&nbsp;<br>Horas</span></div>&nbsp;
        <div class="bloque-minutos"><span>${tiempo.minutosFaltantes}&nbsp;<br>Minutos</span></div>&nbsp;
        <div class="bloque-segundos"><span>${tiempo.faltanteSegundos}&nbsp;<br>Segundos</span></div>`;
        
        if(tiempo.cuantoFalta <=1) {
            clearInterval(timerUpdate)
            document.getElementById("cholito").innerHTML = mensajeFinal;
        }
    
    }, 1000)
};

countdown('Nov 20 2022 16:00:00', 'countdown', '¡Comenzó el mundial!');


