
document.addEventListener('DOMContentLoaded', () => {
    carregarDadosDoUsuario();
});


function carregarDadosDoUsuario() {
    const usuario = {
        nome: "",
        email: "",
        foto: ""
    };
    document.getElementById('nomeUsuario').textContent = usuario.nome;
    document.getElementById('emailUsuario').textContent = usuario.email;
    document.getElementById('fotoPerfil').src = usuario.foto;
}

function atualizarDadosDoUsuario(novosDados) {
    console.log("Enviando dados atualizados:", novosDados);
    alert("Dados atualizados com sucesso!");
}
