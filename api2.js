const fetch = require('node-fetch')
const fs = require('fs');
async function getBitcoin(){
    try{
        const response = await fetch ('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        let bitcoinprice = "";
        Array.from(data).forEach(bit => {
            bitcoinprice+= `${bit['rate']}`;
        });

        fs.writeFile('bitcoint.csv', bitcoinprice, (error) => {
            if (error){
                console.log(error);
                return;
            }
            console.log('se ha creado el archivo');
        })
        
    }catch(error){
        console.log(error)
    }
}
getBitcoin();

