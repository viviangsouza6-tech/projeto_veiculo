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