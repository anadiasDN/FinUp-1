document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("despesa-form");
    const listaDespesas = document.getElementById("despesas-lista");

    configurarCampoMoeda("valor");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const valor = converterNumero(document.getElementById("valor").value);
        const categoria = document.getElementById("categoria").value.trim();
        const data = document.getElementById("data").value;

        if (!valor || !categoria || !data) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        const novaDespesa = `
            <tr>
                <td>${data}</td>
                <td>${categoria}</td>
                <td>R$ ${valor.toFixed(2).replace('.', ',')}</td>
            </tr>
        `;

        listaDespesas.innerHTML += novaDespesa;
        form.reset();
    });

    function configurarCampoMoeda(idCampo) {
        const input = document.getElementById(idCampo);

        input.addEventListener('input', function (e) {
            let valor = e.target.value.replace(/\D/g, '');
            valor = (parseInt(valor) / 100).toFixed(2);
            if (isNaN(valor)) {
                valor = '0.00';
            }
            e.target.value = 'R$ ' + valor.replace('.', ',');
        });

        input.addEventListener('focus', function (e) {
            if (e.target.value === '') {
                e.target.value = 'R$ 0,00';
            }
        });

        input.addEventListener('blur', function (e) {
            if (e.target.value === 'R$ 0,00') {
                e.target.value = '';
            }
        });
    }

    function converterNumero(valor) {
        return parseFloat(valor.replace(/\D/g, '')) / 100 || 0;
    }
});
