## How to install ?
``` npm install easy-wechat-pay --save```
## How to use ?

> Base config , just need to write once
```
const wxPay = require('easy-wechat-pay');
const testConfig = {
    appid: '',      //replace by your appid
    mch_id: '',     //replace by your merchant id
    signKey: ''     //replace by your pay sign key
}
wxPay.publicPay.setBaseConfig(
    testConfig.appid,
    testConfig.mch_id,
    testConfig.signKey
);
```
>The following example only shows the parameters that must be filled in.
Please refer to the official documentation for parameter types and values.
[Official documentation](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_1)
---

> Unified order
```
let postData = {
    body: '',
    out_trade_no: '',
    total_fee: 1,
    notify_url: '',
    openid: ''
};
wxPay.publicPay.unifiedorder(postData)
    .then((result) => {
        wxPay.utils.parseXml2Json(result.text).then((jsonResult) => {
            console.log(jsonResult.xml);
        })
    }).catch((err) => {
        console.log(err.text);
    });
```
> Order query 
```
//You need choose one between 'transaction_id' and 'out_trade_no'

let postData = {
    out_trade_no: '100000000001'
};
wxPay.publicPay.orderquery(postData)
    .then((result) => {
        wxPay.utils.parseXml2Json(result.text).then((jsonResult) => {
            console.log(jsonResult.xml);
        })
    }).catch((err) => {
        console.log(err.text);
    });
```
> Close order
```
let postData = {
    out_trade_no: ''
};
wxPay.publicPay.closeorder(postData)
    .then((result) => {
        wxPay.utils.parseXml2Json(result.text).then((jsonResult) => {
            console.log(jsonResult.xml);
        })
    }).catch((err) => {
        console.log(err.text);
    });
```
> Refund
```
 let postData = {
    out_trade_no: '',
    out_refund_no: '',
    total_fee: 1,
    refund_fee: 1,
};
wxPay.publicPay.refund(postData)
    .then((result) => {
        wxPay.utils.parseXml2Json(result.text).then((jsonResult) => {
            console.log(jsonResult.xml);
        })
    }).catch((err) => {
        console.log(err.text);
    });
```
> Refund query
```
// You need to choose one of the following options.
['out_trade_no', 'transaction_id', 'out_refund_no', 'refund_id']


let postData = {
    out_trade_no: '',
};
// let postData = {
//     transaction_id: '1217752501201407033233368018',
// };
// let postData = {
//     out_refund_no: '900000000001',
// };
// let postData = {
//     refund_id: '1217752501201407033233368018',
// };
wxPay.publicPay.refundquery(postData)
    .then((result) => {
        wxPay.utils.parseXml2Json(result.text).then((jsonResult) => {
            console.log(jsonResult.xml);
        })
    }).catch((err) => {
        console.log(err.text);
    });
```
> Download bill
```
 let postData = {
    bill_date: '',
    bill_type: ''   //'ALL', 'SUCCESS', 'REFUND', 'RECHARGE_REFUND'
};
wxPay.publicPay.downloadfundflow(postData)
    .then((result) => {
        wxPay.utils.parseXml2Json(result.text).then((jsonResult) => {
            console.log(jsonResult.xml);
        })
    }).catch((err) => {
        console.log(err.text);
    });
```
> Download fund flow
```
 let postData = {
    bill_date: '',
    account_type: ''   //'Basic', 'Operation', 'Fees'
};
wxPay.publicPay.downloadfundflow(postData)
    .then((result) => {
        wxPay.utils.parseXml2Json(result.text).then((jsonResult) => {
            console.log(jsonResult.xml);
        })
    }).catch((err) => {
        console.log(err.text);
    });
```
> Report
```
let postData = {
    interface_url: 'https://api.mch.weixin.qq.com/pay/unifiedorder',
    execute_time: 1000,
    return_code: 'SUCCESS',
    return_msg: 'OK',
    result_code: 'SUCCESS',
    user_ip: '8.8.8.8'
};
wxPay.publicPay.report(postData)
    .then((result) => {
        wxPay.utils.parseXml2Json(result.text).then((jsonResult) => {
            console.log(jsonResult.xml);
        })
    }).catch((err) => {
        console.log(err.text);
    });
```
> Batch query comment
```
let postData = {
    begin_time: '20170724000000',
    end_time: '20170725000000',
    offset: '0'
};
wxPay.publicPay.batchquerycomment(postData)
    .then((result) => {
        wxPay.utils.parseXml2Json(result.text).then((jsonResult) => {
            console.log(jsonResult.xml);
        })
    }).catch((err) => {
        console.log(err.text);
    });
```