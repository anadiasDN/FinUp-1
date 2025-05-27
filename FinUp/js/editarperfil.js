document.getElementById("edit-profile-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById("full-name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    alert(`Dados atualizados:\nNome Completo: ${fullName}\nNome de Usuário: ${username}\nEmail: ${email}`);
});
