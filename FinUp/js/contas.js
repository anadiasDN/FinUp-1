document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("conta-form");
    const listaContas = document.getElementById("contas-lista");
    const valorInput = document.getElementById("valor");

    valorInput.addEventListener("input", function (e) {
        let valor = e.target.value;

        valor = valor.replace(/\D/g, "");

        valor = (parseFloat(valor) / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        e.target.value = valor;
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const valorFormatado = valorInput.value;
        const valorNumerico = parseFloat(valorFormatado.replace(/[^\d,-]/g, "").replace(",", "."));

        const categoria = document.getElementById("categoria").value.trim();
        const data = document.getElementById("data").value;

        if (!valorNumerico || !categoria || !data) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

      const novaLinha = document.createElement("tr");

novaLinha.innerHTML = `
    <td>${data}</td>
    <td>${categoria}</td>
    <td>${valorFormatado}</td>
    <td><button class="btn-remover">Remover</button></td>
`;

listaContas.appendChild(novaLinha);

// Adiciona evento de remoção
novaLinha.querySelector(".btn-remover").addEventListener("click", () => {
    novaLinha.remove();
});



        listaContas.innerHTML += novaConta;
        form.reset();
    });
});
