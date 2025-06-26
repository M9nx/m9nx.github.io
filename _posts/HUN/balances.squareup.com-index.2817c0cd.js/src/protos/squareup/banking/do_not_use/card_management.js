/**
 * GENERATED CODE – DO NOT EDIT!
 */
/* eslint-disable */
import * as $protobuf from 'protobufjs/light';
import { fixType } from '../../../Fixes';
import Builder from '../../../Builder';
import '../../common/location';
import '../../common/time';

const $root = ($protobuf.roots['default']|| ($protobuf.roots['default'] = new $protobuf.Root()));

$root.addJSON({
  "squareup": {
    "nested": {
      "banking": {
        "nested": {
          "do_not_use": {
            "nested": {
              "card_management": {
                "nested": {
                  "Card": {
                    "fields": {
                      "id": {
                        "type": "string",
                        "id": 1,
                        "rule": "optional"
                      },
                      "status": {
                        "type": "squareup.banking.do_not_use.card_management.CardStatus",
                        "id": 2,
                        "rule": "optional"
                      },
                      "type": {
                        "type": "squareup.banking.do_not_use.card_management.CardType",
                        "id": 3,
                        "rule": "optional"
                      },
                      "fulfillment": {
                        "type": "squareup.banking.do_not_use.card_management.CardFulfillment",
                        "id": 4,
                        "rule": "optional"
                      },
                      "billingAddress": {
                        "type": "squareup.common.location.GlobalAddress",
                        "id": 5,
                        "rule": "optional"
                      },
                      "panSuffix": {
                        "type": "string",
                        "id": 6,
                        "rule": "optional"
                      },
                      "fullPan": {
                        "type": "string",
                        "id": 7,
                        "rule": "optional"
                      },
                      "securityCode": {
                        "type": "string",
                        "id": 8,
                        "rule": "optional"
                      },
                      "expiration": {
                        "type": "squareup.common.time.YearMonth",
                        "id": 9,
                        "rule": "optional"
                      }
                    }
                  },
                  "CardType": {
                    "values": {
                      "CARD_TYPE_DO_NOT_USE": 0,
                      "PHYSICAL": 1,
                      "VIRTUAL": 2
                    }
                  },
                  "CardStatus": {
                    "values": {
                      "CARD_STATUS_DO_NOT_USE": 0,
                      "ORDERED": 1,
                      "ISSUED": 2,
                      "ACTIVATABLE": 3,
                      "ACTIVE": 4,
                      "DISABLED": 5,
                      "SUSPENDED": 6,
                      "TERMINATED": 7
                    }
                  },
                  "Customization": {
                    "fields": {
                      "cardImage": {
                        "type": "squareup.banking.do_not_use.card_management.Customization.CardImage",
                        "id": 1,
                        "rule": "repeated"
                      },
                      "cardText": {
                        "type": "squareup.banking.do_not_use.card_management.Customization.CardText",
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
                            "type": "squareup.banking.do_not_use.card_management.Customization.CardText.Type",
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
                      "CardImage": {
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
                          },
                          "type": {
                            "type": "squareup.banking.do_not_use.card_management.Customization.CardImage.Type",
                            "id": 3,
                            "rule": "optional"
                          }
                        },
                        "nested": {
                          "Type": {
                            "values": {
                              "CARD_IMAGE_TYPE_DO_NOT_USE": 0,
                              "SIGNATURE_FRONT": 1,
                              "FULL_FRONT": 2
                            }
                          }
                        }
                      }
                    }
                  },
                  "CardFulfillment": {
                    "fields": {
                      "shipping": {
                        "type": "squareup.banking.do_not_use.card_management.CardFulfillment.Shipping",
                        "id": 1,
                        "rule": "optional"
                      },
                      "customization": {
                        "type": "squareup.banking.do_not_use.card_management.Customization",
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
                            "type": "squareup.banking.do_not_use.card_management.CardFulfillment.Shipping.ShippingStatus",
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
                              "FAILED": 4,
                              "CANCELED": 5
                            }
                          }
                        }
                      }
                    }
                  },
                  "ActivateCardRequest": {
                    "fields": {
                      "cardToken": {
                        "type": "string",
                        "id": 1,
                        "rule": "optional"
                      },
                      "expiration": {
                        "type": "string",
                        "id": 2,
                        "rule": "optional"
                      },
                      "securityCode": {
                        "type": "string",
                        "id": 3,
                        "rule": "optional"
                      }
                    }
                  },
                  "ActivateCardResponse": {
                    "fields": {}
                  },
                  "RetrieveCardRequest": {
                    "fields": {
                      "cardToken": {
                        "type": "string",
                        "id": 1,
                        "rule": "optional"
                      }
                    }
                  },
                  "RetrieveCardResponse": {
                    "fields": {
                      "card": {
                        "type": "squareup.banking.do_not_use.card_management.Card",
                        "id": 1,
                        "rule": "optional"
                      }
                    }
                  },
                  "SetPinRequest": {
                    "fields": {
                      "cardToken": {
                        "type": "string",
                        "id": 1,
                        "rule": "optional"
                      },
                      "pin": {
                        "type": "string",
                        "id": 2,
                        "rule": "optional"
                      }
                    }
                  },
                  "SetPinResponse": {
                    "fields": {
                      "errors": {
                        "type": "squareup.banking.do_not_use.card_management.SetPinResponse.Error",
                        "id": 1,
                        "rule": "repeated"
                      }
                    },
                    "nested": {
                      "Error": {
                        "values": {
                          "SET_PIN_ERROR_DO_NOT_USE": 0,
                          "UNAUTHORIZED_USER": 1,
                          "INVALID_CARD_TOKEN": 2,
                          "WEAK_PIN": 3
                        }
                      }
                    }
                  },
                  "CardManagementService": {
                    "methods": {
                      "ActivateCard": {
                        "requestType": "squareup.banking.do_not_use.card_management.ActivateCardRequest",
                        "responseType": "squareup.banking.do_not_use.card_management.ActivateCardResponse"
                      },
                      "RetrieveCard": {
                        "requestType": "squareup.banking.do_not_use.card_management.RetrieveCardRequest",
                        "responseType": "squareup.banking.do_not_use.card_management.RetrieveCardResponse"
                      },
                      "SetPin": {
                        "requestType": "squareup.banking.do_not_use.card_management.SetPinRequest",
                        "responseType": "squareup.banking.do_not_use.card_management.SetPinResponse"
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
 * DO NOT USE!
 * These protos are here temporarily . They will be moved and can change.
 *
 * SOURCE Card @ squareup/banking/do_not_use/card_management.proto at 20:1
 */
export const Card = $root.lookupType('squareup.banking.do_not_use.card_management.Card');
fixType(Card);
Builder.createAndAttachToType(Card);
/**
 * SOURCE CardType @ squareup/banking/do_not_use/card_management.proto at 32:1
 */
export const CardType = $root.lookupEnum('squareup.banking.do_not_use.card_management.CardType').values;
/**
 * SOURCE CardStatus @ squareup/banking/do_not_use/card_management.proto at 38:1
 */
export const CardStatus = $root.lookupEnum('squareup.banking.do_not_use.card_management.CardStatus').values;
/**
 * SOURCE Customization @ squareup/banking/do_not_use/card_management.proto at 49:1
 */
export const Customization = $root.lookupType('squareup.banking.do_not_use.card_management.Customization');
fixType(Customization);
Builder.createAndAttachToType(Customization);
/**
 * SOURCE CardText @ squareup/banking/do_not_use/card_management.proto at 53:3
 */
Customization.CardText = $root.lookupType('squareup.banking.do_not_use.card_management.Customization.CardText');
fixType(Customization.CardText);
Builder.createAndAttachToType(Customization.CardText);
/**
 * SOURCE Type @ squareup/banking/do_not_use/card_management.proto at 57:5
 */
Customization.CardText.Type = $root.lookupEnum('squareup.banking.do_not_use.card_management.Customization.CardText.Type').values;
/**
 * SOURCE CardImage @ squareup/banking/do_not_use/card_management.proto at 64:3
 */
Customization.CardImage = $root.lookupType('squareup.banking.do_not_use.card_management.Customization.CardImage');
fixType(Customization.CardImage);
Builder.createAndAttachToType(Customization.CardImage);
/**
 * SOURCE Type @ squareup/banking/do_not_use/card_management.proto at 69:5
 */
Customization.CardImage.Type = $root.lookupEnum('squareup.banking.do_not_use.card_management.Customization.CardImage.Type').values;
/**
 * SOURCE CardFulfillment @ squareup/banking/do_not_use/card_management.proto at 77:1
 */
export const CardFulfillment = $root.lookupType('squareup.banking.do_not_use.card_management.CardFulfillment');
fixType(CardFulfillment);
Builder.createAndAttachToType(CardFulfillment);
/**
 * SOURCE Shipping @ squareup/banking/do_not_use/card_management.proto at 78:3
 */
CardFulfillment.Shipping = $root.lookupType('squareup.banking.do_not_use.card_management.CardFulfillment.Shipping');
fixType(CardFulfillment.Shipping);
Builder.createAndAttachToType(CardFulfillment.Shipping);
/**
 * SOURCE ShippingStatus @ squareup/banking/do_not_use/card_management.proto at 79:5
 */
CardFulfillment.Shipping.ShippingStatus = $root.lookupEnum('squareup.banking.do_not_use.card_management.CardFulfillment.Shipping.ShippingStatus').values;
/**
 * SOURCE ActivateCardRequest @ squareup/banking/do_not_use/card_management.proto at 94:1
 */
export const ActivateCardRequest = $root.lookupType('squareup.banking.do_not_use.card_management.ActivateCardRequest');
fixType(ActivateCardRequest, {
  cardToken: { notEmpty: true },
  expiration: { notEmpty: true },
  securityCode: { notEmpty: true },
});
Builder.createAndAttachToType(ActivateCardRequest);
/**
 * SOURCE ActivateCardResponse @ squareup/banking/do_not_use/card_management.proto at 100:1
 */
export const ActivateCardResponse = $root.lookupType('squareup.banking.do_not_use.card_management.ActivateCardResponse');
fixType(ActivateCardResponse);
Builder.createAndAttachToType(ActivateCardResponse);
/**
 * SOURCE RetrieveCardRequest @ squareup/banking/do_not_use/card_management.proto at 102:1
 */
export const RetrieveCardRequest = $root.lookupType('squareup.banking.do_not_use.card_management.RetrieveCardRequest');
fixType(RetrieveCardRequest, {
  cardToken: { notEmpty: true },
});
Builder.createAndAttachToType(RetrieveCardRequest);
/**
 * SOURCE RetrieveCardResponse @ squareup/banking/do_not_use/card_management.proto at 106:1
 */
export const RetrieveCardResponse = $root.lookupType('squareup.banking.do_not_use.card_management.RetrieveCardResponse');
fixType(RetrieveCardResponse);
Builder.createAndAttachToType(RetrieveCardResponse);
/**
 * SOURCE SetPinRequest @ squareup/banking/do_not_use/card_management.proto at 110:1
 */
export const SetPinRequest = $root.lookupType('squareup.banking.do_not_use.card_management.SetPinRequest');
fixType(SetPinRequest, {
  cardToken: { notEmpty: true },
  pin: { notEmpty: true },
});
Builder.createAndAttachToType(SetPinRequest);
/**
 * SOURCE SetPinResponse @ squareup/banking/do_not_use/card_management.proto at 115:1
 */
export const SetPinResponse = $root.lookupType('squareup.banking.do_not_use.card_management.SetPinResponse');
fixType(SetPinResponse);
Builder.createAndAttachToType(SetPinResponse);
/**
 * SOURCE Error @ squareup/banking/do_not_use/card_management.proto at 118:3
 */
SetPinResponse.Error = $root.lookupEnum('squareup.banking.do_not_use.card_management.SetPinResponse.Error').values;
/**
 * SOURCE CardManagementService @ squareup/banking/do_not_use/card_management.proto at 126:1
 */
export const CardManagementService = $root.lookupService('squareup.banking.do_not_use.card_management.CardManagementService');
