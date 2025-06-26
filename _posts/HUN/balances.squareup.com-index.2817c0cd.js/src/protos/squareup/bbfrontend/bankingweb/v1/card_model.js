/**
 * GENERATED CODE – DO NOT EDIT!
 */
/* eslint-disable */
import * as $protobuf from 'protobufjs/light';
import { fixType } from '../../../../Fixes';
import Builder from '../../../../Builder';
import '../../../common/location';
import '../../../common/time';

const $root = ($protobuf.roots['default']|| ($protobuf.roots['default'] = new $protobuf.Root()));

$root.addJSON({
  "squareup": {
    "nested": {
      "bbfrontend": {
        "nested": {
          "bankingweb": {
            "nested": {
              "v1": {
                "nested": {
                  "CardType": {
                    "values": {
                      "CARD_TYPE_DO_NOT_USE": 0,
                      "PHYSICAL": 1,
                      "VIRTUAL": 2,
                      "PAIR": 3
                    }
                  },
                  "CardStatus": {
                    "values": {
                      "CARD_STATUS_DO_NOT_USE": 0,
                      "ORDERED": 1,
                      "ISSUED": 2,
                      "ISSUED_ACTIVATABLE": 3,
                      "ACTIVE": 4,
                      "DISABLED": 5,
                      "SUSPENDED": 6,
                      "TERMINATED": 7
                    }
                  },
                  "CardFulfillment": {
                    "fields": {
                      "shipping": {
                        "type": "squareup.bbfrontend.bankingweb.v1.CardFulfillment.Shipping",
                        "id": 1,
                        "rule": "optional"
                      },
                      "customization": {
                        "type": "squareup.bbfrontend.bankingweb.v1.CardFulfillment.Customization",
                        "id": 2,
                        "rule": "optional"
                      }
                    },
                    "nested": {
                      "Shipping": {
                        "fields": {
                          "address": {
                            "type": "squareup.common.location.GlobalAddress",
                            "id": 1,
                            "rule": "optional"
                          },
                          "status": {
                            "type": "squareup.bbfrontend.bankingweb.v1.CardFulfillment.Shipping.ShippingStatus",
                            "id": 2,
                            "rule": "optional"
                          }
                        },
                        "nested": {
                          "ShippingStatus": {
                            "values": {
                              "SHIPPING_STATUS_DO_NOT_USE": 0,
                              "PROCESSING": 1,
                              "SHIPPED": 2,
                              "DELIVERED": 3,
                              "FAILURE": 4,
                              "CANCELED": 5
                            }
                          }
                        }
                      },
                      "Customization": {
                        "fields": {
                          "signature": {
                            "type": "squareup.bbfrontend.bankingweb.v1.CardFulfillment.Customization.Signature",
                            "id": 1,
                            "rule": "optional"
                          },
                          "cardText": {
                            "type": "squareup.bbfrontend.bankingweb.v1.CardFulfillment.Customization.CardText",
                            "id": 2,
                            "rule": "repeated"
                          }
                        },
                        "nested": {
                          "CardText": {
                            "fields": {
                              "text": {
                                "type": "string",
                                "id": 1,
                                "rule": "optional"
                              },
                              "type": {
                                "type": "squareup.bbfrontend.bankingweb.v1.CardFulfillment.Customization.CardText.Type",
                                "id": 2,
                                "rule": "optional"
                              }
                            },
                            "nested": {
                              "Type": {
                                "values": {
                                  "CARD_TEXT_DO_NOT_USE": 0,
                                  "BUSINESS_NAME": 1,
                                  "CARD_HOLDER": 2
                                }
                              }
                            }
                          },
                          "Signature": {
                            "fields": {
                              "imageBytes": {
                                "type": "bytes",
                                "id": 1,
                                "rule": "optional"
                              },
                              "mimeType": {
                                "type": "string",
                                "id": 2,
                                "rule": "optional"
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "Card": {
                    "fields": {
                      "id": {
                        "type": "string",
                        "id": 1,
                        "rule": "optional"
                      },
                      "status": {
                        "type": "squareup.bbfrontend.bankingweb.v1.CardStatus",
                        "id": 2,
                        "rule": "optional"
                      },
                      "type": {
                        "type": "squareup.bbfrontend.bankingweb.v1.CardType",
                        "id": 3,
                        "rule": "optional"
                      },
                      "fulfillment": {
                        "type": "squareup.bbfrontend.bankingweb.v1.CardFulfillment",
                        "id": 4,
                        "rule": "optional"
                      },
                      "cardPairId": {
                        "type": "string",
                        "id": 6,
                        "rule": "optional"
                      },
                      "panSuffix": {
                        "type": "string",
                        "id": 7,
                        "rule": "optional"
                      },
                      "fullPan": {
                        "type": "string",
                        "id": 8,
                        "rule": "optional"
                      },
                      "securityCode": {
                        "type": "string",
                        "id": 9,
                        "rule": "optional"
                      },
                      "expiration": {
                        "type": "squareup.common.time.YearMonth",
                        "id": 10,
                        "rule": "optional"
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
 * SOURCE CardType @ squareup/bbfrontend/bankingweb/v1/card_model.proto at 13:1
 */
export const CardType = $root.lookupEnum('squareup.bbfrontend.bankingweb.v1.CardType').values;
/**
 * SOURCE CardStatus @ squareup/bbfrontend/bankingweb/v1/card_model.proto at 20:1
 */
export const CardStatus = $root.lookupEnum('squareup.bbfrontend.bankingweb.v1.CardStatus').values;
/**
 * SOURCE CardFulfillment @ squareup/bbfrontend/bankingweb/v1/card_model.proto at 61:1
 */
export const CardFulfillment = $root.lookupType('squareup.bbfrontend.bankingweb.v1.CardFulfillment');
fixType(CardFulfillment);
Builder.createAndAttachToType(CardFulfillment);
/**
 * SOURCE Shipping @ squareup/bbfrontend/bankingweb/v1/card_model.proto at 62:3
 */
CardFulfillment.Shipping = $root.lookupType('squareup.bbfrontend.bankingweb.v1.CardFulfillment.Shipping');
fixType(CardFulfillment.Shipping);
Builder.createAndAttachToType(CardFulfillment.Shipping);
/**
 * SOURCE ShippingStatus @ squareup/bbfrontend/bankingweb/v1/card_model.proto at 63:5
 */
CardFulfillment.Shipping.ShippingStatus = $root.lookupEnum('squareup.bbfrontend.bankingweb.v1.CardFulfillment.Shipping.ShippingStatus').values;
/**
 * SOURCE Customization @ squareup/bbfrontend/bankingweb/v1/card_model.proto at 75:3
 */
CardFulfillment.Customization = $root.lookupType('squareup.bbfrontend.bankingweb.v1.CardFulfillment.Customization');
fixType(CardFulfillment.Customization);
Builder.createAndAttachToType(CardFulfillment.Customization);
/**
 * SOURCE CardText @ squareup/bbfrontend/bankingweb/v1/card_model.proto at 79:5
 */
CardFulfillment.Customization.CardText = $root.lookupType('squareup.bbfrontend.bankingweb.v1.CardFulfillment.Customization.CardText');
fixType(CardFulfillment.Customization.CardText);
Builder.createAndAttachToType(CardFulfillment.Customization.CardText);
/**
 * SOURCE Type @ squareup/bbfrontend/bankingweb/v1/card_model.proto at 83:7
 */
CardFulfillment.Customization.CardText.Type = $root.lookupEnum('squareup.bbfrontend.bankingweb.v1.CardFulfillment.Customization.CardText.Type').values;
/**
 * SOURCE Signature @ squareup/bbfrontend/bankingweb/v1/card_model.proto at 90:5
 */
CardFulfillment.Customization.Signature = $root.lookupType('squareup.bbfrontend.bankingweb.v1.CardFulfillment.Customization.Signature');
fixType(CardFulfillment.Customization.Signature);
Builder.createAndAttachToType(CardFulfillment.Customization.Signature);
/**
 * SOURCE Card @ squareup/bbfrontend/bankingweb/v1/card_model.proto at 100:1
 */
export const Card = $root.lookupType('squareup.bbfrontend.bankingweb.v1.Card');
fixType(Card);
Builder.createAndAttachToType(Card);
