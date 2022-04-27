    
    let principal = Number (prompt(' Calculadora de juros compostos: \n Valor do aporte inicial: '));
    let rateOverTime = Number (prompt(' Taxa de juro mensal (%): '));
    let numberOfTimes = Number (prompt('Por quantos meses você irá investir o capital?'))
    let amount;

    function calculo(){
        amount = principal * (1 + (rateOverTime/100)) ** numberOfTimes;
                return Math.round(amount);
    }
    calculo();
    console.log ('O valor total ao final do período será: '+Math.round(amount) +' reais'); 
