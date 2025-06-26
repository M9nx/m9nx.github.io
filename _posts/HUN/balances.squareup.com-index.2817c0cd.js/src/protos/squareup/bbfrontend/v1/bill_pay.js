/**
 * GENERATED CODE – DO NOT EDIT!
 */
/* eslint-disable */
import * as $protobuf from 'protobufjs/light';
import { fixType } from '../../../Fixes';
import Builder from '../../../Builder';
import '../../common/time';

const $root = ($protobuf.roots['default']|| ($protobuf.roots['default'] = new $protobuf.Root()));

$root.addJSON({
  "squareup": {
    "nested": {
      "bbfrontend": {
        "nested": {
          "service": {
            "nested": {
              "v1": {
                "nested": {
                  "GetBillPayDataRequest": {
                    "fields": {
                      "authorizationCode": {
                        "type": "string",
                        "id": 1,
                        "rule": "optional"
                      },
                      "unitToken": {
                        "type": "string",
                        "id": 2,
                        "rule": "optional"
                      }
                    }
                  },
                  "GetBillPayDataResponse": {
                    "fields": {
                      "value": {
                        "type": "squareup.bbfrontend.service.v1.GetBillPayDataResponse.BillPayData",
                        "id": 1
                      },
                      "error": {
                        "type": "squareup.bbfrontend.service.v1.GetBillPayDataResponse.Error",
                        "id": 2
                      }
                    },
                    "nested": {
                      "BillPayData": {
                        "fields": {
                          "card": {
                            "type": "squareup.bbfrontend.service.v1.GetBillPayDataResponse.BillPayData.PrivateCardData",
                            "id": 1,
                            "rule": "repeated"
                          },
                          "directDepositAccount": {
                            "type": "squareup.bbfrontend.service.v1.GetBillPayDataResponse.BillPayData.PrivateDirectDepositAccountData",
                            "id": 2,
                            "rule": "repeated"
                          }
                        },
                        "nested": {
                          "PrivateCardData": {
                            "fields": {
                              "fullPan": {
                                "type": "string",
                                "id": 1,
                                "rule": "optional"
                              },
                              "cvc": {
                                "type": "string",
                                "id": 2,
                                "rule": "optional"
                              },
                              "expiration": {
                                "type": "squareup.common.time.YearMonth",
                                "id": 3,
                                "rule": "optional"
                              },
                              "nameOnCard": {
                                "type": "string",
                                "id": 4,
                                "rule": "optional"
                              }
                            }
                          },
                          "PrivateDirectDepositAccountData": {
                            "fields": {
                              "routingNumber": {
                                "type": "string",
                                "id": 1,
                                "rule": "optional"
                              },
                              "accountNumber": {
                                "type": "string",
                                "id": 2,
                                "rule": "optional"
                              }
                            }
                          }
                        }
                      },
                      "Error": {
                        "values": {
                          "UNKNOWN": 0,
                          "UNAUTHORIZED": 1,
                          "AUTHORIZATION_FAILURE": 2
                        }
                      },
                      "result": {
                        "oneof": [
                          "value",
                          "error"
                        ]
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

/**
 * GetBillPayData
 *
 * SOURCE GetBillPayDataRequest @ squareup/bbfrontend/v1/bill_pay.proto at 18:1
 */
export const GetBillPayDataRequest = $root.lookupType('squareup.bbfrontend.service.v1.GetBillPayDataRequest');
fixType(GetBillPayDataRequest, {
  unitToken: { required: true },
});
Builder.createAndAttachToType(GetBillPayDataRequest);
/**
 * SOURCE GetBillPayDataResponse @ squareup/bbfrontend/v1/bill_pay.proto at 25:1
 */
export const GetBillPayDataResponse = $root.lookupType('squareup.bbfrontend.service.v1.GetBillPayDataResponse');
fixType(GetBillPayDataResponse);
Builder.createAndAttachToType(GetBillPayDataResponse);
/**
 * SOURCE BillPayData @ squareup/bbfrontend/v1/bill_pay.proto at 31:3
 */
GetBillPayDataResponse.BillPayData = $root.lookupType('squareup.bbfrontend.service.v1.GetBillPayDataResponse.BillPayData');
fixType(GetBillPayDataResponse.BillPayData);
Builder.createAndAttachToType(GetBillPayDataResponse.BillPayData);
/**
 * duplicated from squareup.bizbank.card_management.PrivateCardData
 *
 * SOURCE PrivateCardData @ squareup/bbfrontend/v1/bill_pay.proto at 36:5
 */
GetBillPayDataResponse.BillPayData.PrivateCardData = $root.lookupType('squareup.bbfrontend.service.v1.GetBillPayDataResponse.BillPayData.PrivateCardData');
fixType(GetBillPayDataResponse.BillPayData.PrivateCardData);
Builder.createAndAttachToType(GetBillPayDataResponse.BillPayData.PrivateCardData);
/**
 * SOURCE PrivateDirectDepositAccountData @ squareup/bbfrontend/v1/bill_pay.proto at 43:5
 */
GetBillPayDataResponse.BillPayData.PrivateDirectDepositAccountData = $root.lookupType('squareup.bbfrontend.service.v1.GetBillPayDataResponse.BillPayData.PrivateDirectDepositAccountData');
fixType(GetBillPayDataResponse.BillPayData.PrivateDirectDepositAccountData);
Builder.createAndAttachToType(GetBillPayDataResponse.BillPayData.PrivateDirectDepositAccountData);
/**
 * SOURCE Error @ squareup/bbfrontend/v1/bill_pay.proto at 49:3
 */
GetBillPayDataResponse.Error = $root.lookupEnum('squareup.bbfrontend.service.v1.GetBillPayDataResponse.Error').values;
