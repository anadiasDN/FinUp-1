document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("meta-form");
    const listaMetas = document.getElementById("metas-lista");

    configurarCampoMoeda('valor-meta');
    configurarCampoMoeda('valor-atual');

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome-meta").value.trim();
        const valorMeta = document.getElementById("valor-meta").value;
        const valorAtual = document.getElementById("valor-atual").value;

        const metasExistentes = document.querySelectorAll("#metas-lista tr td:first-child");
        for (let meta of metasExistentes) {
            if (meta.innerText.toLowerCase() === nome.toLowerCase()) {
                alert("Já existe uma meta com esse nome. Escolha um nome diferente.");
                return;
            }
        }

        if (!nome || converterNumero(valorMeta) <= 0) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        const progresso = (converterNumero(valorAtual) / converterNumero(valorMeta) * 100).toFixed(2);
        const metaId = new Date().getTime();

        const novaMeta = `
    <tr id="meta-${metaId}">
        <td>${nome}</td>
        <td>R$ ${formatarNumero(converterNumero(valorMeta))}</td>
        <td id="valor-atual-${metaId}">R$ ${formatarNumero(converterNumero(valorAtual))}</td>
        <td>
            <div class="progress-bar">
                <div class="progress" id="progress-${metaId}" style="width: ${progresso > 100 ? 100 : progresso}%;"></div>
            </div>
        </td>
        <td>
            <input type="text" id="novo-valor-${metaId}" placeholder="R$ 0,00">
            <button onclick="atualizarMeta(${metaId})">Adicionar</button>
        </td>
        <td>
            <button onclick="removerMeta(${metaId})" class="remover-btn">Remover</button>
        </td>
    </tr>
`;


        listaMetas.innerHTML += novaMeta;

        configurarCampoMoeda(`novo-valor-${metaId}`);

        form.reset();
    });

    window.atualizarMeta = function (metaId) {
        const valorAtualElement = document.getElementById(`valor-atual-${metaId}`);
        const progressElement = document.getElementById(`progress-${metaId}`);
        const novoValorInput = document.getElementById(`novo-valor-${metaId}`);

        const valorObjetivo = converterNumero(
            document.querySelector(`#meta-${metaId} td:nth-child(2)`).innerText
        );
        let valorAtual = converterNumero(valorAtualElement.innerText);
        let novoValor = converterNumero(novoValorInput.value);

        if (novoValor <= 0) {
            alert("Digite um valor válido.");
            return;
        }

        valorAtual += novoValor;
        const progresso = ((valorAtual / valorObjetivo) * 100).toFixed(2);

        valorAtualElement.innerText = `R$ ${formatarNumero(valorAtual)}`;
        progressElement.style.width = `${progresso > 100 ? 100 : progresso}%`;

        novoValorInput.value = "";
    };
        window.removerMeta = function (metaId) {
        const metaRow = document.getElementById(`meta-${metaId}`);
        if (metaRow) {
            metaRow.remove();
        }
    };


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

    // 🔧 Converte texto moeda em número
    function converterNumero(valor) {
        return parseFloat(valor.replace(/\D/g, '')) / 100 || 0;
    }

    // 🔧 Formata número para moeda brasileira
    function formatarNumero(numero) {
        return numero.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
});
