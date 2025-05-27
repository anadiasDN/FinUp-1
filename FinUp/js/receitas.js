document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("receita-form");
    const listaReceitas = document.getElementById("receitas-lista");
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

        const novaReceita = `
            <tr>
                <td>${data}</td>
                <td>${categoria}</td>
                <td>${valorFormatado}</td>
            </tr>
        `;

        listaReceitas.innerHTML += novaReceita;
        form.reset();
    });
});
