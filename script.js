```javascript
// ===============================
// MENU RESPONSIVO
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll("#menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
}

// ===============================
// FORMULÁRIO
// ===============================

function enviarFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Validação de e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        alert("Digite um e-mail válido!");
        return;
    }

    alert(
        "Mensagem enviada com sucesso!\n\n" +
        "Obrigado pelo contato, " + nome + "!"
    );

    document.getElementById("formContato").reset();
}
```

