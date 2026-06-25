// Controle do menu responsivo

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Fecha o menu quando um link é selecionado
    document.querySelectorAll("#menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
}

// Validação do formulário de contato

function enviarFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se todos os campos foram preenchidos
    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se o e-mail está em um formato válido
    if (!regexEmail.test(email)) {
        alert("Digite um e-mail válido!");
        return;
    }

    alert(
        "Mensagem enviada com sucesso!\n\n" +
        "Obrigado pelo contato, " + nome + "!"
    );

    // Limpa o formulário após o envio
    document.getElementById("formContato").reset();
}
