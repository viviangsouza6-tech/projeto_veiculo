

let form = document.querySelector("#formDados")
let dados = document.querySelector("#lista-veiculos")

form.addEventListener('submit',(evt) =>{

    let objFormdados = new FormData(form)
    let marca = objFormdados.get('marca')
    let modelo = objFormdados.get('modelo')
    let placa = objFormdados.get('placa')
    let anodefabricacao = objFormdados.get('anodefabricacao')
    let valordemercadodoveiculo = objFormdados.get('valordemercadodoveiculo')
    let tipodecombustivel = objFormdados.get('tipodecombustivel"')

    let carro = {
        marca: marca,
        modelo: modelo,
        placa: placa,
        anodefabricacao: anodefabricacao,
        valordemercadodoveiculo: valordemercadodoveiculo,
        tipodecombustivel: tipodecombustivel,
    
    }
    console.log(carro.marca);

})


