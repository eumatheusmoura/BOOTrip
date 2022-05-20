
const Resposta = {
    RetornaRes: function () {
        let VerificaCamps = BaseCadastro.TodosCampos()
        let verify = 0;
        let frase = "";
        for (let i = 0; i < VerificaCamps.length; i++) {
            if (VerificaCamps[i].val() == '') {
                frase += `${$("label[for=" + VerificaCamps[i].attr("id") + "]").text()}, `
                VerificaCamps[i].css('border', '1px solid #8C4404')
            }
            else {
                VerificaCamps[i].css('border', '1px solid #ced4da')
                verify++;
            }
        }
        if (verify == 9) {
            const VerificaEmail = ValidaEmail(VerificaCamps[1])
            const VerificaSenha = ValidaSenha([VerificaCamps[2], VerificaCamps[3]])
            if (VerificaEmail == true && VerificaSenha == true) {
                $('#BackPositivo').css('display', 'block')
                $('#BackNegativo').css('display', 'none')
                $('#Text').text('Cadastro realizado com sucesso!');
            } else {
                if (VerificaEmail == false && VerificaSenha == false) {
                    $('#BackPositivo').css('display', 'none')
                    $('#BackNegativo').css('display', 'block')
                    $('#Text1').text('Campo Email e Senha não preenchido corretamente!');
                } else if (VerificaSenha == false) {
                    $('#BackPositivo').css('display', 'none')
                    $('#BackNegativo').css('display', 'block')
                    $('#Text1').text('Campo Senha não preenchido corretamente!');
                } else {
                    $('#BackPositivo').css('display', 'none')
                    $('#BackNegativo').css('display', 'block')
                    $('#Text1').text('Campo Email não preenchido corretamente!');
                }
            }
        }
        else {
            $('#BackPositivo').css('display', 'none')
            $('#BackNegativo').css('display', 'block')
            let lista = frase.split('')
            lista.splice(lista.length - 2)
            frase = lista.join('')
            lista = frase.split(', ')
            frase1 = lista.splice(lista.length - 1)
            frase = lista.join(', ') + ' e ' + frase1
            $('#Text1').text('Campo(s) ' + frase + ' não preenchido(s)!');
        }
    }
}




function ValidaEmail(Email) {
    CampEmail = Email.val().split('@')
    if (CampEmail.length == 2 && CampEmail[1] == "gmail.com" || CampEmail[1] == "outlook.com" || CampEmail[1] == "yahoo.com") return true
    else {
        Email.css('border', '1px solid #8C4404')
        erro1 = 'Email'
        return false
    }
}

function ValidaSenha(Senhas, erro) {
    console.log(Senhas)
    if (Senhas[0].val() == Senhas[1].val()) return true
    else {
        Senhas[0].css('border', '1px solid #8C4404')
        Senhas[1].css('border', '1px solid #8C4404')
        return false
    }
}