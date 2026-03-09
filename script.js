function mostrarMensaje(){

    const mensajes = [
        "Eres una persona muy especial",
        "Nunca olvides lo increíble que eres ✨",
        "El mundo es mejor porque existes",
        "Siempre habrá alguien pensando en ti",
        "Sigue brillando como lo haces siempre",
        "Eres capaz de lograr cosas maravillosas",
        "Iluminas mi vida",
        "Te amooo",
        "Te quiero mucho",
        "Gracias por existir",
        "Siempre estaré aquí para ti",
        "I am proud of you",
        "Te adoro",
        "Te admiro",
        "Te amo con todo mi corazón",
        "Eres más que suficiente",
        "Tu puedes mailov",
        "Para ti mibida 🌹",
        "Cuentas conmigo",
        "Even on my worst, I'm best with you",
        "Brillaaaaa corazonnn",
        "Ya te dije que te amo?",
        "Siempre contigo, aunque no esté ahí <3",
        "Eres como un rayito de sol en los días frios",
        "Abrazoooo 🫂",
        "Me haces feliz",
        "Eres increíble",
        "Gracias por ser así como eres",
        "Gracias por estar para mí",
        "Y como dijeron los Perdidos: Don't you ever tell yourself that you're not enough",
        "Nunca olvides lo especial que eres para mí",
        "You showed me a power that is strong enough to bring sun to the darkest days",
        ];

    const indice = Math.floor(Math.random()*mensajes.length);

    document.getElementById("mensaje").textContent = mensajes[indice];

    document.getElementById("modal").style.display = "flex";
}

function cerrarModal(){
    document.getElementById("modal").style.display = "none";
}