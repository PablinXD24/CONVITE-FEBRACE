document.getElementById("neuron-title").addEventListener("click", function() {
    let letters = document.querySelectorAll("#neuron-title span");

    // Aplica a animação de piscar e desaparecer a cada letra individualmente
    letters.forEach(function(letter, index) {
        setTimeout(function() {
            letter.classList.add("flicker-effect");
        }, index * 500); // Maior delay entre as letras para que pisquem de forma suave
    });

    // Após o término da animação, o título desaparece
    setTimeout(function() {
        document.getElementById("neuron-title").style.animation = "fade-out 1s forwards"; // Desaparece o título em 1 segundo
    }, letters.length * 500); // O fade-out começa logo após as letras piscarem

    // A bolinha aparece somente após o título desaparecer completamente
    setTimeout(function() {
        document.getElementById("invitation-circle").classList.remove("hidden"); // Exibe a bolinha
    }, letters.length * 500 + 1000); // A bolinha aparece 1s após o título desaparecer
});

document.getElementById("invitation-circle").addEventListener("click", function() {
    // Exibe o overlay e o convite ao clicar na bolinha
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("group-invitation").style.display = "block";
});

document.getElementById("close-invitation").addEventListener("click", function() {
    // Fecha o overlay e o convite ao clicar no botão "Fechar"
    document.getElementById("overlay").style.display = "none";
    document.getElementById("group-invitation").style.display = "none";
});
