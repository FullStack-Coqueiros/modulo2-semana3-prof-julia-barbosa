function alertFunction(){
    alert('infelizmente, hoje é nossa última aula :(')
}

function displayTime(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById('resultado').textContent = time;
}

const createClock = setInterval(displayTime, 1000);
