
           /* var i, num, par=0, imp=0, pos = 0, neg = 0;            

            for(i = 1 ;i <= 6; i++) {        
                num = parseInt(prompt("Informe um numero["+i+"]:")); 

                if(num % 2 == 0){
                  par = par + 1;
              
                }
                else{
                  imp = imp + 1;
              
                }

                if (num > 0) { 
                    pos = pos + 1; 
                } 
                else { 
                    neg = neg + 1;
                }
            }

            console.log(par+ " Valor(es) par(es)");
            console.log(imp+ " Valor(es) impar(es)");
            console.log(pos+ " Valor(es) positivo(s)");
            console.log(neg+ " Valor(es) negativo(s)");*/

         /*   let N, pos=0;            

            for(N = 1 ;N <= 6; N++) {    
              
              let num =gets(); 

                if(num > 0) { 

                    pos = pos + 1; 

                }
                
            }

            console.log(+pos + " valores positivos");*/

         /*   var count=1;
             var i = prompt("valor")
            while (count <=i){
                if(count%2==0){
                console.log(count);
                alert(count);}
                count++;
            }; */
/*
var  par=0, imp=0, i=0;

var valor=prompt("valores");

For(i<=5, i++){
  
  if(valor%2==0){
    par = par + 1;
  }
  else{
    imp = imp + 1;
  }
  console.log(par+ " Valor(es) par(es)");
  console.log(imp+ " Valor(es) par(es)");
};*/

/*let i, num, par=0, imp=0, pos=0, neg=0;  

   for(i = 1 ;i <= 5; i++){  
    num=parseInt(prompt("numeros")); 
        if(num%2==0){
          par=par+1;}
        else{
          imp=imp+1;}

        if(num>0){ 
          pos=pos+1;} 
        else{ 
          neg=neg+1;} 
     
   }
  console.log(par+ " Valor(es) par(es)")
  console.log(imp+ " Valor(es) impar(es)");
  console.log(pos+ " Valor(es) positivo(s)");
  console.log(neg+ " Valor(es) negativo(s)");*/

  
/*
  let notaCem = 0;
 
  let notaCinquenta = 0;
 
  let notaVinte = 0;
 
  let notaDez = 0;
 
  let notaCinco = 0;
 
  let notaDois = 0;
 
  let notaUm = 0;

  let valor = parseInt(gets());
 
  while (valor != 0) {
 
    if (valor >= 100) {
 
      valor -= 100;
 
      notaCem++;
 
    }
 
    else if (valor >= 50) {
 
      valor -= 50;
 
      notaCinquenta++;
 
    }
 
    else if (valor >= 20) {
 
      valor -= 20;
 
      notaVinte++;
 
    }
 
    else if (valor >= 10) {
 
      valor -= 10;
 
      notaDez++;
 
    }
 
    else if (valor >= 5) {
 
      valor -= 5;
 
      notaCinco++;
 
    }
 
    else if (valor >= 2) {
 
      valor -= 2;
 
      notaDois++;
 
    }
 
    else if (valor >= 1) {
 
      valor -= 1;
 
      notaUm++;
 
    }
 
  }
 
  console.log(notaCem + " nota(s) de R$ 100,00");
 
  console.log(notaCinquenta + " nota(s) de R$ 50,00");
 
  console.log(notaVinte + " nota(s) de R$ 20,00");
 
  console.log(notaDez + " nota(s) de R$ 10,00");
 
  console.log(notaCinco + " nota(s) de R$ 5,00");
 
  console.log(notaDois + " nota(s) de R$ 2,00");
 
  console.log(notaUm + " nota(s) de R$ 1,00");*/

let km = prompt("valor");
let li = prompt("valor2");

let kml = parseFloat(km*li).toFixed(3); 
console.log(kml+ "Km/l");






