const xml2js = require('xml2js');
const crypto = require('crypto');
const xmlBuilder = new xml2js.Builder({
    headless: true,
    xmldec: {
        version: '1.0',
        encoding: 'utf-8'
    }
});
const jsonParser = new xml2js.Parser({});
const utils = {};
utils.parseJson2Xml = function (jsonParams) {
    let xmlParams = xmlBuilder.buildObject(jsonParams);
    return xmlParams;
};
utils.parseXml2Json = function (xmlParams) {
    return new Promise((resolve, reject) => {
        jsonParser.parseString(xmlParams, (err, result) => {
            if (err) {
                return reject(er);
            } else {
                return resolve(result);
            }
        })
    });
};
utils.randomString = function (length) {
    let len = length || 32;
    const randomChars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    const maxPosition = randomChars.length;
    let randomResultStr = '';
    for (let i = 0; i < len; i++) {
        randomResultStr += randomChars.charAt(Math.floor(Math.random() * maxPosition));
    }
    return randomResultStr;
};
utils.makeSign = function (params, key, sign_type) {
    let sortKeys = Object.keys(params).sort();
    let signStr = '';
    for (let key of sortKeys) {
        if (params[key] === '' || params[key] === null
            || params[key] === undefined || key === 'sign') {
            continue;
        }
        if (typeof params[key] === 'object') {
            signStr += key + "=" + JSON.stringify(params[key]) + "&";
        } else {
            signStr += key + "=" + params[key] + "&";
        }
    }
    signStr += 'key=' + key;
    console.log(signStr);
    switch (sign_type) {
        case 'MD5':
            signStr = md5(signStr).toUpperCase();
            break;
        case 'HMAC-SHA256':
            signStr = hmacSha256(key, signStr).toUpperCase();
            break;
        default:
            signStr = md5(signStr).toUpperCase();
            break;
    }
    return signStr;
};

function md5(str) {
    return crypto.createHash('md5').update(str).digest('hex');
}
function hmacSha256(key, str) {
    return crypto.createHmac('SHA256', key).update(str).digest('hex');
}

module.exports = utils;