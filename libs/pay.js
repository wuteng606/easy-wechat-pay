const WechatPublicPay = require('./pay/WechatPublicPay');
const CommonUtils = require('./utils/CommonUtils');
const wechat = {
    publicPay: WechatPublicPay,
    utils: CommonUtils
};

module.exports = wechat;