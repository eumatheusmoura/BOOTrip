
$('#Buscar').click(function (e) {
    e.preventDefault();
    const CEP = BaseCadastro.CEP;
    const Dados = new DadosCEP(CEP.val())
    AlteraDados(Dados.getCEP())
});

function AlteraDados(Dados){
    BaseCadastro.Logradouro.val(Dados[0])
    BaseCadastro.Complemento.val(Dados[1])
    BaseCadastro.Cidade.val(Dados[2])
    BaseCadastro.Estado.val(Dados[3])
}

$('#Cadastrar').click(function (e) { 
    e.preventDefault();
    Resposta.RetornaRes()
});