//Cria referência ao form e ao elemento h3 (onde será exibida a reposta)

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Cria um ouvinte de evento, acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value // obtém o nome digitado no form
    //resp.innerText = 'Olá ' + nome + '!' //exibe a resposta do programa
    resp.innerText = `Olá ${nome} !` //Atenção que é o backtick (acento grave) e não aspas simples

     //Exemplos de interpolação
    console.log(`Olá: ${nome} !`);
    console.log(`O nome ${nome} tem ${nome.length} letras` )
    e.preventDefault()
})