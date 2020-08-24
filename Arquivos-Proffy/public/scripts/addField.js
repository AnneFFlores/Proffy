//procurara o botão
document.querySelector("#add-time")
    //quando clicar no botão
    .addEventListener('click', cloneField)

//executar uma ação
function cloneField() {
    //duplicar os campos. Que campos?

    const newfieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos. Que campos?
    const fields = newfieldContainer.querySelectorAll('input')
    // para cada campo, limpar

    fields.forEach(function (field) {
        field.value = ""
    });

    //colocar na página. Aonde exatamente?
    document.querySelector('#schedule-items').appendChild(newfieldContainer)

}


    //fields[0].value = ""
    //fields[1].value = ""
    // console.log(fields[0].value = "")