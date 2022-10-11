//entradas
//vetor de carros vendidos. subvetor contém carros vendidos em cada mês
let carrosVendidos = [[], [], [], [], [], [], [], [], [], [], [], []]

for (let numeroMes = 0; numeroMes < 12; numeroMes++) {


  while (true) {
    let nomeCarro = prompt(`Digite o nome do próximo carro vendido no mês ${numeroMes + 1}.Digite fim para pular para o próximo mês.`)

    if (nomeCarro.toUpperCase() === `FIM`) {
      break
    }
    else carrosVendidos[numeroMes].push(nomeCarro)
  }
  //console.log(carrosVendidos)

  let mes
  switch (numeroMes) {
    case 0: mes = `Janeiro`; break
    case 1: mes = `Fevereiro`; break
    case 2: mes = `Março`; break
    case 3: mes = `Abril`; break
    case 4: mes = `Maio`; break
    case 5: mes = `Junho`; break
    case 6: mes = `Julho`; break
    case 7: mes = `Agosto`; break
    case 8: mes = `Setembro`; break
    case 9: mes = `Outubro`; break
    case 10: mes = `Novembro`; break
    case 11: mes = `Dezembro`; break
  }
  console.log(`Os carros vendidos no mês ${mes} são:`)

  for (let indCarro = 0; carrosVendidos[numeroMes][indCarro] !== undefined; indCarro++)
    console.log(`${carrosVendidos[numeroMes][indCarro]}`)

}

