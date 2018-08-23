const PublicBaseUrl = "https://api.mch.weixin.qq.com/";
const WechatPublicPayApi = {
    unifiedorder: PublicBaseUrl + "pay/unifiedorder", //unified
    orderquery: PublicBaseUrl + "pay/orderquery", //order query
    closeorder: PublicBaseUrl + "pay/closeorder", //close order
    refund: PublicBaseUrl + "secapi/pay/refund",  //refund
    refundquery: PublicBaseUrl + "pay/refundquery",   //refund query
    downloadbill: PublicBaseUrl + "pay/downloadbill", //download bill
    downloadfundflow: PublicBaseUrl + "pay/downloadfundflow", //download fund flow
    report: PublicBaseUrl + "payitil/report", //report
    batchquerycomment: PublicBaseUrl + "billcommentsp/batchquerycomment"  //batch query comment
}

module.exports = { WechatPublicPayApi };