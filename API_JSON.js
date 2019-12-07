/*
API JS que vai ler JSON
*/
$.getJSON("viagens.json", function(json){

class soma{
	constructor(local, viagem){
		this.loc = local;
		this.viag = viagem;
	}
	 get valor(){
	 return this.loc + this.viag;
		}
	
    };
    //Praia e transportes
 let somaPC = new soma(json.ferias[0].valor, json.transporte[0].valor);
 let somaPA = new soma(json.ferias[0].valor, json.transporte[1].valor);
 let somaPV = new soma(json.ferias[0].valor, json.transporte[2].valor);
//ilha e transportes
 let somaIC = new soma(json.ferias[1].valor, json.transporte[0].valor);
 let somaIA = new soma(json.ferias[1].valor, json.transporte[1].valor);
 let somaIV = new soma(json.ferias[1].valor, json.transporte[2].valor);
 //campo e transportas
 let somaCC = new soma(json.ferias[2].valor, json.transporte[0].valor);
 let somaCA = new soma(json.ferias[2].valor, json.transporte[1].valor);
 let somaCV = new soma(json.ferias[2].valor, json.transporte[2].valor); 

console.log('PRAIA');
 console.log(somaPC.valor);
  console.log(somaPA.valor);
  console.log(somaPV.valor);
  console.log('ILHAS');
  console.log(somaIC.valor);
  console.log(somaIA.valor);
  console.log(somaIV.valor);
  console.log('CAMPO');
  console.log(somaCC.valor);
  console.log(somaCA.valor);
  console.log(somaCV.valor);

  document.getElementById("CA").innerHTML = somaCA.valor;
  document.getElementById("CC").innerHTML = somaCC.valor;
  document.getElementById("CV").innerHTML = somaCV.valor;
})