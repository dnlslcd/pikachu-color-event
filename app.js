// Pika-pika suerte!

// NO MODIFICAR 

document.querySelector('#red').addEventListener('click', updateBgColor);
document.querySelector('#blue').addEventListener('click', updateBgColor);
document.querySelector('#green').addEventListener('click', updateBgColor);

// MODIFICAR A PARTIR DE AQUÍ 

function updateBgColor(event) {
    // 1. en event.target tenemos el cuadrado que ha sido clicado
    // 2. podemos acceder a la propiedad id mediante event.target.id
    console.log(event.target.id); 

    // 3. tenemos que recuperar el tag img donde está el pikachu
    const pikachu = document.querySelector("img");

    // 4. establecer el color de fondo en linea de dicho nodo con el valor event.target.id
    pikachu.style.backgroundColor = event.target.id;
}