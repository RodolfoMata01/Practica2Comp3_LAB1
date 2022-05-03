const fetch = require('node-fetch')
async function getBitcoin(){
    try{
        const response = await fetch ('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response();
        let bitcoinprice = "";
        Array.from(data).forEach(bit => {
            bitcoinprice+= `${bit['rate']}`;
        });

        fs.writefile('bitcoint.txr', bitcoinprice, (error) => {
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

