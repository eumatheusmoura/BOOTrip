import {DadosCEP} from '../models/BuscaCep.js'
import {dados} from '../views/Dados.js'

$('#Buscar').click(function (e) {
    e.preventDefault();
    const CEP = dados.CEP;
    const Dados = new DadosCEP(CEP.val())
    AlteraDados(Dados.getCEP())
});

function AlteraDados(Dados){
    dados.Logradouro.val(Dados[0])
    dados.Complemento.val(Dados[1])
    dados.Cidade.val(Dados[2])
    dados.Estado.val(Dados[3])
}

