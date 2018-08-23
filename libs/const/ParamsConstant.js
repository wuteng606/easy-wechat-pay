const UnifiedOrderParams = {
    "appid": {
        isNecessary: true,
        type: "String",
        maxLength: 32
    },
    "mch_id": {
        isNecessary: true,
        type: "String",
        maxLength: 32
    },
    "device_info": {
        isNecessary: false,
        type: "String",
        maxLength: 32
    },
    "nonce_str": {
        isNecessary: true,
        type: "String",
        maxLength: 32
    },
    "sign": {
        isNecessary: false,
        type: "String",
        maxLength: 32
    },
    "sign_type": {
        isNecessary: false,
        type: "String",
        maxLength: 32
    },
    "body": {
        isNecessary: true,
        type: "String",
        maxLength: 128
    },
    "detail": {
        isNecessary: false,
        type: "String",
        maxLength: 6000
    },
    "attach": {
        isNecessary: false,
        type: "String",
        maxLength: 127
    },
    "out_trade_no": {
        isNecessary: true,
        type: "String",
        maxLength: 32
    },
    "fee_type": {
        isNecessary: false,
        type: "String",
        maxLength: 16
    },
    "total_fee": {
        isNecessary: true,
        type: "Int",
        maxLength: -1
    },
    "spbill_create_ip": {
        isNecessary: true,
        type: "String",
        maxLength: 16
    },
    "time_start": {
        isNecessary: false,
        type: "String",
        maxLength: 14
    },
    "time_expire": {
        isNecessary: false,
        type: "String",
        maxLength: 14
    },
    "goods_tag": {
        isNecessary: false,
        type: "String",
        maxLength: 32
    },
    "notify_url": {
        isNecessary: true,
        type: "String",
        maxLength: 256
    },
    "trade_type": {
        isNecessary: true,
        type: "String",
        maxLength: 16
    },
    "product_id": {
        isNecessary: false,
        type: "String",
        maxLength: 32
    },
    "limit_pay": {
        isNecessary: false,
        type: "String",
        maxLength: 32
    },
    "openid": {
        isNecessary: false,
        type: "String",
        maxLength: 128
    },
    "scene_info": {
        isNecessary: false,
        type: "String",
        maxLength: 256
    },
};
const OrderQueryParams = {
    "appid": {
        isNecessary: true,
        type: "String",
        maxLength: 32
    },
    "mch_id": {
        isNecessary: true,
        type: "String",
        maxLength: 32
    },
    "transaction_id": {
        isNecessary: false,
        type: "String",
        maxLength: 32
    },
    "out_trade_no": {
        isNecessary: false,
        type: "String",
        maxLength: 32
    },
    "nonce_str": {
        isNecessary: false,
        type: "String",
        maxLength: 32
    },
    "sign": {
        isNecessary: false,
        type: "String",
        maxLength: 32
    },
    "sign_type": {
        isNecessary: false,
        type: "String",
        maxLength: 32
    },
};
const CloseOrderParams = {
    "appid": {
        isNecessary: true,
        type: "String",
        maxLength: 32
    },
    "mch_id": {
        isNecessary: true,
        type: "String",
        maxLength: 32
    },
    "out_trade_no": {
        isNecessary: false,
        type: "String",
        maxLength: 32
    },
    "nonce_str": {
        isNecessary: false,
        type: "String",
        maxLength: 32
    },
    "sign": {
        isNecessary: false,
        type: "String",
        maxLength: 32
    },
    "sign_type": {
        isNecessary: false,
        type: "String",
        maxLength: 32
    },
};
const RefundParams = {
    "": {
        isNecessary: true,
        type: "",
        maxLength: 1
    },
};
const RefundQueryParams = {
    "": {
        isNecessary: true,
        type: "",
        maxLength: 1
    },
};
const DownloadBillParams = {
    "": {
        isNecessary: true,
        type: "",
        maxLength: 1
    },
};
const DownloadFundFlowParams = {
    "": {
        isNecessary: true,
        type: "",
        maxLength: 1
    },
};
const ReportParams = {
    "": {
        isNecessary: true,
        type: "",
        maxLength: 1
    },
};
const BatchQueryCommentParams = {
    "": {
        isNecessary: true,
        type: "",
        maxLength: 1
    },
};