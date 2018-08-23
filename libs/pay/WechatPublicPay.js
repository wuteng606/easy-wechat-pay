const superagent = require('superagent');
const { WechatPublicPayApi } = require('../const/ApiConstant');
const commonUtils = require('../utils/CommonUtils');
function WechatPublicPay() {
};
const signType = {
    MD5: 'MD5',
    HMAC_SHA256: 'HMAC-SHA256'
}
WechatPublicPay.prototype.setBaseConfig = function (appid, mch_id, signKey) {
    this.appid = appid;
    this.mch_id = mch_id;
    this.signKey = signKey;
    this.debug = false;
    this.sign_type = signType.MD5;
    this.trade_type = 'JSAPI';
}
WechatPublicPay.prototype.unifiedorder = function (params) {
    return new Promise((resolve, reject) => {
        let common = {
            appid: this.appid,
            mch_id: this.mch_id,
            sign_type: this.sign_type,
            trade_type: this.trade_type,
            nonce_str: commonUtils.randomString()
        }
        commonStep(common, params, this.signKey, WechatPublicPayApi.unifiedorder).then((result) => {
            return resolve(result);
        }).catch((err) => {
            return reject(err);
        })
    });
};
WechatPublicPay.prototype.orderquery = function (params) {
    return new Promise((resolve, reject) => {
        let common = {
            appid: this.appid,
            mch_id: this.mch_id,
            sign_type: this.sign_type,
            nonce_str: commonUtils.randomString()
        }
        commonStep(common, params, this.signKey, WechatPublicPayApi.unifiedorder).then((result) => {
            return resolve(result);
        }).catch((err) => {
            return reject(err);
        })
    });
};
WechatPublicPay.prototype.closeorder = function (params) {
    return new Promise((resolve, reject) => {
        let common = {
            appid: this.appid,
            mch_id: this.mch_id,
            sign_type: this.sign_type,
            nonce_str: commonUtils.randomString()
        }
        commonStep(common, params, this.signKey, WechatPublicPayApi.unifiedorder).then((result) => {
            return resolve(result);
        }).catch((err) => {
            return reject(err);
        })
    });
};
WechatPublicPay.prototype.refund = function (params) {
    return new Promise((resolve, reject) => {
        let common = {
            appid: this.appid,
            mch_id: this.mch_id,
            sign_type: this.sign_type,
            nonce_str: commonUtils.randomString()
        }
        commonStep(common, params, this.signKey, WechatPublicPayApi.unifiedorder).then((result) => {
            return resolve(result);
        }).catch((err) => {
            return reject(err);
        })
    });
};
WechatPublicPay.prototype.refundquery = function (params) {
    return new Promise((resolve, reject) => {
        let common = {
            appid: this.appid,
            mch_id: this.mch_id,
            sign_type: this.sign_type,
            nonce_str: commonUtils.randomString()
        }
        commonStep(common, params, this.signKey, WechatPublicPayApi.unifiedorder).then((result) => {
            return resolve(result);
        }).catch((err) => {
            return reject(err);
        })
    });
};
WechatPublicPay.prototype.downloadbill = function (params) {
    return new Promise((resolve, reject) => {
        let common = {
            appid: this.appid,
            mch_id: this.mch_id,
            sign_type: this.sign_type,
            nonce_str: commonUtils.randomString()
        }
        commonStep(common, params, this.signKey, WechatPublicPayApi.unifiedorder).then((result) => {
            return resolve(result);
        }).catch((err) => {
            return reject(err);
        })
    });
};
WechatPublicPay.prototype.downloadfundflow = function (params) {
    return new Promise((resolve, reject) => {
        let common = {
            appid: this.appid,
            mch_id: this.mch_id,
            sign_type: signType.HMAC_SHA256,
            nonce_str: commonUtils.randomString()
        }
        commonStep(common, params, this.signKey, WechatPublicPayApi.unifiedorder).then((result) => {
            return resolve(result);
        }).catch((err) => {
            return reject(err);
        })
    });
};
WechatPublicPay.prototype.report = function (params) {
    return new Promise((resolve, reject) => {
        let common = {
            appid: this.appid,
            mch_id: this.mch_id,
            sign_type: this.sign_type,
            nonce_str: commonUtils.randomString()
        }
        commonStep(common, params, this.signKey, WechatPublicPayApi.unifiedorder).then((result) => {
            return resolve(result);
        }).catch((err) => {
            return reject(err);
        })
    });
};
WechatPublicPay.prototype.batchquerycomment = function (params) {
    return new Promise((resolve, reject) => {
        let common = {
            appid: this.appid,
            mch_id: this.mch_id,
            sign_type: signType.HMAC_SHA256,
            nonce_str: commonUtils.randomString()
        }
        commonStep(common, params, this.signKey, WechatPublicPayApi.unifiedorder).then((result) => {
            return resolve(result);
        }).catch((err) => {
            return reject(err);
        })
    });
}

function commonStep(common, params, signKey, url) {
    return new Promise((resolve, reject) => {
        try {
            let keys = Object.keys(params);
            let postData = {
                xml: {
                }
            };
            let commonKeys = Object.keys(common);
            for (let commonKey of commonKeys) {
                postData.xml[commonKey] = common[commonKey];
            }
            for (let key of keys) {
                postData.xml[key] = params[key];
            }
            postData.xml.sign = commonUtils.makeSign(postData.xml, signKey, common.sign_type);
            postData = commonUtils.parseJson2Xml(postData);
            superagent.post(url)
                .set('Content-Type', 'application/json')
                .buffer()
                .send(postData)
                .type('xml')
                .then((retXml) => {
                    return resolve(retXml);
                });
        } catch (err) {
            console.log(err);
            return reject(err);
        }
    });
}
const wechatPublicPay = new WechatPublicPay();
module.exports = wechatPublicPay;