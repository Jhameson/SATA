function login(e){
    e.preventDefault();
    const mockedUser = "admin";
    const mockedPassword = "admin";

    var getUser = document.getElementById("userName").value;
    var getPassword = document.getElementById("userPassword").value;

    console.log(`MUser: ${mockedUser} MPassword: ${mockedPassword}`);
    console.log(`gUser: ${getUser} gPasswrod: ${getPassword}`);

    if (getUser === mockedUser && getPassword === mockedPassword){
        alert(`Bem vindo ${getUser}`);
        window.location.href = '../../pages/ListaFiltrada/index.html'
    }else if(getUser === mockedUser && getPassword != mockedPassword){
        alert(`Verifique a sua senha!`);
        //console.log("Senha incorreta!");
    }else if(getUser != mockedUser && getPassword === mockedPassword){
        alert(`Não encontramos o usuário ${getUser}`);
        //console.log("Usuário incorreto ou inexistente");
    }else {
        alert(`Informe credenciais válidas!`);
    }

}

