const a = Number(prompt("insert a number")) // const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura
const b = Number(prompt("insert another number"));
const ex1=[]

  for (let n = a; n <= b; n++) {
      ex1.push(n) //push insere o valor gerado pelo for na const ex1
      console.log(n)
      
      
    }
    console.log(ex1)
  
  
