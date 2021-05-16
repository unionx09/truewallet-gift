const axios = require('axios');

function getpayload(giftcode){
    return {
        'accept': 'application/json',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'content-length': '59',
        'content-type': 'application/json',
        'origin': 'https://gift.truemoney.com',
        'referer': 'https://gift.truemoney.com/campaign/?v='+giftcode,
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.66',
    }
}

function urlcheck(url) {
    let replace_giftcode = url.replace('https://gift.truemoney.com/campaign/?v=', '') || 'error'
    return replace_giftcode
}

class WalletGift {

    constructor(phonenumber) {
        this.phonenumber = phonenumber;
    }

    async pay(url) {
        if (this.phonenumber.length != 10) {
            return {error:"PhoneNumber format is 0123456789"}
        }
        var giftcode = urlcheck(url)
        if (giftcode == 'error') {
            return {error:'url format error Ex. "https://gift.truemoney.com/campaign/?v=jkaIee01khBpXXvefc"'}
        }
        try {
            var response = await axios({
                method: 'post',
                url: 'https://gift.truemoney.com/campaign/vouchers/'+giftcode+'/redeem',
                headers: getpayload(giftcode),
                data: {mobile: this.phonenumber , voucher_hash: giftcode}
            })
            return response.data
        } catch (error) {
            return error.response.data
        }
    }

}

module.exports = WalletGift;



