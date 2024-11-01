const apiKey = 'f87e2fb406e3f4528418e43f';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

// FUNÇÃO PARA CONSULTA À TAXA DE CÂMBIO VIA API 
// ################################################### 
async function getExchangeRate(daMoeda, paraMoeda) {
// TRATA ERRO TRY/CATCH
    try{
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = response.json();

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
