const apiKey = 'f87e2fb406e3f4528418e43f';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

// FUNÇÃO PARA CONSULTA À TAXA DE CÂMBIO VIA API 
// ################################################### 
async function getExchangeRate(daMoeda, paraMoeda) {
// TRATA ERRO TRY/CATCH
    try{
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = await response.json();

        if(data.result === "success"){
            return data.conversion_rates[paraMoeda];
        }else{
            throw new Error('Erro ao buscar taxa de câmbio');
        }
    }catch (error){
        console.error("Erro:",error);
        return null;

    }
}
// #####################################################

document.getElementById('currency-form').addEventListener('submit', async function (event){
    event.preventDefault();

    // OBTER VALORES DE ENTRADA 
    const valor = parseFloat(document.getElementById ('valor').value);
    const daMoeda = document.getElementById ('daMoeda').value;
    const paraMoeda = document.getElementById ('paraMoeda').value;

    const exchangeRate = await getExchangeRate(daMoeda, paraMoeda);

    if(exchangeRate){
        const convertedValue = valor * exchangeRate;

        // console.log(convertedValue); 

        const conversao = document.getElementById('conversao');
        conversao.textContent = `Resultado: ${convertedValue.toFixed(2)} ${paraMoeda}`;
    } else {
        alert('Erro ao buscar a cotação. Tente novamente');
    }
});
