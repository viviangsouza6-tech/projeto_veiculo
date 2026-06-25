import { calculos } from "./script_calculo.js";
const formDados = document.querySelector('#form');
const divLista = document.querySelector('#div-lista');


formDados.addEventListener('submit',  (evt) => {
    evt.preventDefault();

    const objformDados = new FormData(formDados);

    let modelo = objformDados.get('modelo');
    let marca = objformDados.get('marca');
    let ano = parseFloat(objformDados.get('ano'));
    let valor = parseFloat(objformDados.get('valor'));
    let tipo = objformDados.get('tipo');

    

    let veiculo = {
        modelo: modelo,
        marca: marca,
        ano: ano,
        valor: valor,
        tipo: tipo
    }

    divLista.innerHTML += calculos(veiculo);

    formDados.reset();

    

})




function calculos(objCarro) {
if ((2026 - objCarro.ano > 20)) {
    return `Modelo: ${objCarro.modelo} <br> Marca: ${objCarro.marca} <br> Ano: ${objCarro.ano} <br> Valor: R$ ${objCarro.valor} <br> Idade: ${2026 - objCarro.ano} anos <br> Valor do seguro: ${objCarro.valor * 0.1}  <br> Valor do IPVA: Isento de IPVA <br>
    Valor final ${(objCarro.valor) + (objCarro.valor * 0.1) + 150} <br> <br>`
}

else if (objCarro.tipo === "GC" ) {
    return `Modelo: ${objCarro.modelo} <br> Marca: ${objCarro.marca} <br> Ano: ${objCarro.ano} <br> Valor: R$ ${objCarro.valor} <br> Idade: ${2026 - objCarro.ano} anos <br> Valor do seguro: ${objCarro.valor * 0.1}  <br> Valor do IPVA ${objCarro.valor * 0.2} <br>
    Valor final ${(objCarro.valor) + (objCarro.valor * 0.1) + (objCarro.valor * 0.2) + 150}
    <br> <br>`
}
else if (objCarro.tipo === "E") {
    return `Modelo: ${objCarro.modelo} <br> Marca: ${objCarro.marca} <br> Ano: ${objCarro.ano} <br> Valor: R$ ${objCarro.valor} <br> Idade: ${2026 - objCarro.ano} anos <br> Valor do seguro: ${objCarro.valor * 0.1}  <br> Valor do IPVA ${objCarro.valor * 0.15} <br>
    Valor final ${(objCarro.valor) + (objCarro.valor * 0.1) + (objCarro.valor * 0.15) + 150}
    <br> <br>`


}
else if (objCarro.tipo === "bio") {
    return `Modelo: ${objCarro.modelo} <br> Marca: ${objCarro.marca} <br> Ano: ${objCarro.ano} <br> Valor: R$ ${objCarro.valor} <br> Idade: ${2026 - objCarro.ano} anos <br> Valor do seguro: ${objCarro.valor * 0.1}  <br> Valor do IPVA ${objCarro.valor * 0.1} <br>
    Valor final ${(objCarro.valor) + (objCarro.valor * 0.1) + (objCarro.valor * 0.01) + 150}
    <br> <br>`
}
    else if (objCarro.tipo === "hib") {
        return `Modelo: ${objCarro.modelo} <br> Marca: ${objCarro.marca} <br> Ano: ${objCarro.ano} <br> Valor: R$ ${objCarro.valor} <br> Idade: ${2026 - objCarro.ano} anos <br> Valor do seguro: ${objCarro.valor * 0.1}  <br> Valor do IPVA ${objCarro.valor * 0.08} <br>
        Valor final ${(objCarro.valor) + (objCarro.valor * 0.1) + (objCarro.valor * 0.08) + 150} <br> <br>`
        
    }

    else if (objCarro.tipo === "ele") {
        return `Modelo: ${objCarro.modelo} <br> Marca: ${objCarro.marca} <br> Ano: ${objCarro.ano} <br> Valor: R$ ${objCarro.valor} <br> Idade: ${2026 - objCarro.ano} anos <br> Valor do seguro: ${objCarro.valor * 0.1}  <br> Valor do IPVA ${objCarro.valor * 0.02} <br>
        Valor final ${(objCarro.valor) + (objCarro.valor * 0.1) + (objCarro.valor * 0.02) + 150}
        <br> <br>`
        
    }


}

export { calculos };

