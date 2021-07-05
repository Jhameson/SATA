function login(e){
    e.preventDefault();
    const mockedUser = "admin";
    const mockedPassword = "admin";

    var getUser = document.getElementById("userName").value;
    var getPassword = document.getElementById("userPassword").value;

    console.log(`MUser: ${mockedUser} MPassword: ${mockedPassword}`);
    console.log(`gUser: ${getUser} gPasswrod: ${getPassword}`);

    if (getUser === mockedUser && getPassword === mockedPassword){
        console.log("Login efetuado com sucesso!");
    }else if(getUser === mockedUser && getPassword != mockedPassword){
        console.log("Senha incorreta!");
    }else if(getUser != mockedUser && getPassword === mockedPassword){
        console.log("Usuário incorreto ou inexistente");
    }else {
        console.log("Não cadastrado no sistema!");
    }

}

