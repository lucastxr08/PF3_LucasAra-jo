const calcular = document.getElementById('calcular');


function valorpoupado () {
    const nome = document.getElementById('nome').value;
    const valor_mensal = document.getElementById('valor_mensal').value;
    const juros = document.getElementById('juros').value;
    const meses = document.getElementById('meses').value;
    const resultado = document.getElementById('resultado');

    if (valor_mensal !== '' && juros !== '' && meses !== '') {

        const calculo1 = (juros/100);
        const calculo2 = (1 + calculo1);
        const calculo3 = (calculo2**meses);
        const calculo4 = (calculo3 - 1);
        const calculo5 = (calculo4 / calculo1);
        const valor_poupado = (calculo5*valor_mensal);
        
        let num = valor_poupado;
        let n = num.toFixed(2);

        resultado.textContent = `Olá, ${nome}, se você aplicar R$${valor_mensal}, à taxa de juros de ${juros}% ao mês, durante ${meses} meses, acumulará uma poupança de R$${n}!`;

    }else {
        resultado.textContent = 'Para calcular o valor poupado , preencha todos os campos.';
    }

}
calcular.addEventListener('click', valorpoupado);