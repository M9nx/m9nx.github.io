/**
 * GENERATED CODE – DO NOT EDIT!
 */
/* eslint-disable */
import * as $protobuf from 'protobufjs/light';
import { fixType } from '../../Fixes';
import Builder from '../../Builder';
import '../common/time';
import '../common/location';
import '../../google/protobuf/field_mask';

const $root = ($protobuf.roots['default']|| ($protobuf.roots['default'] = new $protobuf.Root()));

$root.addJSON({
  "squareup": {
    "nested": {
      "bbdebit": {
        "nested": {
          "cardmanagement": {
            "nested": {
              "Error": {
                "fields": {
                  "category": {
                    "type": "squareup.bbdebit.cardmanagement.Error.Category",
                    "id": 1,
                    "rule": "optional"
                  },
                  "code": {
                    "type": "squareup.bbdebit.cardmanagement.Error.Code",
                    "id": 2,
                    "rule": "optional"
                  },
                  "detail": {
                    "type": "string",
                    "id": 3,
                    "rule": "optional"
                  },
                  "field": {
                    "type": "string",
                    "id": 4,
                    "rule": "optional"
                  }
                },
                "nested": {
                  "Category": {
                    "values": {
                      "ERROR_CATEGORY_DO_NOT_USE": 0,
                      "ERROR_CATEGORY_API_ERROR": 1,
                      "ERROR_CATEGORY_AUTHENTICATION_ERROR": 2,
                      "ERROR_CATEGORY_AUTHORIZATION_ERROR": 3,
                      "ERROR_CATEGORY_INVALID_REQUEST_ERROR": 4
                    }
                  },
                  "Code": {
                    "values": {
                      "ERROR_CODE_DO_NOT_USE": 0,
                      "ERROR_CODE_INTERNAL_SERVER_ERROR": 1,
                      "ERROR_CODE_UNAUTHENTICATED": 2,
                      "ERROR_CODE_UNAUTHORIZED": 3,
                      "ERROR_CODE_MISSING_REQUIRED_PARAMETER": 4,
                      "ERROR_CODE_NOT_FOUND": 5
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
                    "type": "squareup.common.time.YearMonth",
                    "id": 2,
                    "rule": "optional"
                  },
                  "cvv": {
                    "type": "string",
                    "id": 3,
                    "rule": "optional"
                  }
                }
              },
              "ActivateCardResponse": {
                "fields": {
                  "errors": {
                    "type": "squareup.bbdebit.cardmanagement.ActivateCardResponse.ActivateCardError",
                    "id": 1,
                    "rule": "repeated"
                  }
                },
                "nested": {
                  "ActivateCardError": {
                    "values": {
                      "ACTIVATE_CARD_ERROR_DO_NOT_USE": 0,
                      "ACTIVATE_CARD_ERROR_INVALID_CARD_TOKEN": 1
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
                    "type": "squareup.bbdebit.cardmanagement.CardStatus",
                    "id": 2,
                    "rule": "optional"
                  },
                  "cardBrand": {
                    "type": "squareup.bbdebit.cardmanagement.CardBrand",
                    "id": 3,
                    "rule": "optional"
                  },
                  "fulfillment": {
                    "type": "squareup.bbdebit.cardmanagement.CardFulfillment",
                    "id": 4,
                    "rule": "optional"
                  },
                  "lastFour": {
                    "type": "string",
                    "id": 5,
                    "rule": "optional"
                  },
                  "fullPan": {
                    "type": "string",
                    "id": 6,
                    "rule": "optional"
                  },
                  "securityCode": {
                    "type": "string",
                    "id": 7,
                    "rule": "optional"
                  },
                  "expiration": {
                    "type": "squareup.common.time.YearMonth",
                    "id": 8,
                    "rule": "optional"
                  },
                  "canDigitalSpend": {
                    "type": "bool",
                    "id": 9,
                    "rule": "optional"
                  },
                  "balanceId": {
                    "type": "string",
                    "id": 10,
                    "rule": "optional"
                  },
                  "relationship": {
                    "type": "squareup.bbdebit.cardmanagement.Relationship",
                    "id": 11,
                    "rule": "repeated"
                  }
                }
              },
              "CardBrand": {
                "values": {
                  "CARD_BRAND_DO_NOT_USE": 0,
                  "CARD_BRAND_MASTERCARD": 1
                }
              },
              "CardStatus": {
                "values": {
                  "CARD_STATUS_DO_NOT_USE": 0,
                  "CARD_STATUS_ORDERED": 1,
                  "CARD_STATUS_ISSUED": 2,
                  "CARD_STATUS_ACTIVATABLE": 3,
                  "CARD_STATUS_ACTIVE": 4,
                  "CARD_STATUS_LOCKED": 5,
                  "CARD_STATUS_SUSPENDED": 6,
                  "CARD_STATUS_TERMINATED": 7
                }
              },
              "CardFulfillment": {
                "fields": {
                  "status": {
                    "type": "squareup.bbdebit.cardmanagement.CardFulfillment.FulfillmentStatus",
                    "id": 1,
                    "rule": "optional"
                  },
                  "customization": {
                    "type": "squareup.bbdebit.cardmanagement.Customization",
                    "id": 2,
                    "rule": "repeated"
                  },
                  "address": {
                    "type": "squareup.common.location.GlobalAddress",
                    "id": 3,
                    "rule": "optional"
                  }
                },
                "nested": {
                  "FulfillmentStatus": {
                    "values": {
                      "FULFILLMENT_STATUS_DO_NOT_USE": 0,
                      "FULFILLMENT_STATUS_PROCESSING": 1,
                      "FULFILLMENT_STATUS_SHIPPED": 2,
                      "FULFILLMENT_STATUS_DELIVERED": 3,
                      "FULFILLMENT_STATUS_FAILURE": 4,
                      "FULFILLMENT_STATUS_CANCELED": 5,
                      "FULFILLMENT_STATUS_REJECTED": 6
                    }
                  }
                }
              },
              "Customization": {
                "fields": {
                  "id": {
                    "type": "string",
                    "id": 1,
                    "rule": "optional"
                  },
                  "cardTexts": {
                    "type": "squareup.bbdebit.cardmanagement.Customization.CardText",
                    "id": 2,
                    "rule": "repeated"
                  }
                },
                "nested": {
                  "CardText": {
                    "fields": {
                      "type": {
                        "type": "squareup.bbdebit.cardmanagement.Customization.CardText.Type",
                        "id": 1,
                        "rule": "optional"
                      },
                      "text": {
                        "type": "string",
                        "id": 2,
                        "rule": "optional"
                      }
                    },
                    "nested": {
                      "Type": {
                        "values": {
                          "CARD_TEXT_TYPE_BUSINESS_NAME": 1,
                          "CARD_TEXT_TYPE_CARDHOLDER_NAME": 2
                        }
                      }
                    }
                  }
                }
              },
              "CreateCardRequest": {
                "fields": {
                  "idempotenceKey": {
                    "type": "string",
                    "id": 1,
                    "rule": "optional"
                  },
                  "groupType": {
                    "type": "squareup.bbdebit.cardmanagement.CreateCardRequest.CardGroupType",
                    "id": 4,
                    "rule": "optional"
                  },
                  "cardFulfillment": {
                    "type": "squareup.bbdebit.cardmanagement.CardFulfillment",
                    "id": 5,
                    "rule": "optional"
                  },
                  "unitToken": {
                    "type": "string",
                    "id": 2
                  },
                  "balanceId": {
                    "type": "string",
                    "id": 3
                  }
                },
                "nested": {
                  "CardGroupType": {
                    "values": {
                      "CARD_GROUP_TYPE_DO_NOT_USE": 0,
                      "CARD_GROUP_TYPE_VIRTUAL_THEN_PHYSICAL": 1,
                      "CARD_GROUP_TYPE_SINGLE_PHYSICAL": 2
                    }
                  },
                  "account_identifier": {
                    "oneof": [
                      "unitToken",
                      "balanceId"
                    ]
                  }
                }
              },
              "CreateCardResponse": {
                "fields": {
                  "card": {
                    "type": "squareup.bbdebit.cardmanagement.Card",
                    "id": 1,
                    "rule": "optional"
                  },
                  "errors": {
                    "type": "squareup.bbdebit.cardmanagement.CreateCardResponse.CreateCardError",
                    "id": 2,
                    "rule": "repeated"
                  }
                },
                "nested": {
                  "CreateCardError": {
                    "values": {
                      "CREATE_CARD_ERROR_DO_NOT_USE": 0,
                      "CREATE_CARD_ERROR_AUTHORIZATION_CHALLENGED": 1
                    }
                  }
                }
              },
              "ListCardsRequest": {
                "fields": {
                  "sortOrder": {
                    "type": "squareup.bbdebit.cardmanagement.ListCardsRequest.SortOrder",
                    "id": 1,
                    "rule": "optional",
                    "options": {
                      "default": "DESC"
                    }
                  },
                  "cursor": {
                    "type": "string",
                    "id": 2,
                    "rule": "optional"
                  },
                  "limit": {
                    "type": "int32",
                    "id": 3,
                    "rule": "optional",
                    "options": {
                      "default": 10
                    }
                  },
                  "balanceId": {
                    "type": "string",
                    "id": 4,
                    "rule": "optional"
                  },
                  "relationship": {
                    "type": "squareup.bbdebit.cardmanagement.Relationship",
                    "id": 5,
                    "rule": "optional"
                  },
                  "fieldMask": {
                    "type": "google.protobuf.FieldMask",
                    "id": 6,
                    "rule": "optional"
                  }
                },
                "nested": {
                  "SortOrder": {
                    "values": {
                      "ASC": 1,
                      "DESC": 2
                    }
                  }
                }
              },
              "ListCardsResponse": {
                "fields": {
                  "cards": {
                    "type": "squareup.bbdebit.cardmanagement.Card",
                    "id": 1,
                    "rule": "repeated"
                  }
                }
              },
              "LockCardRequest": {
                "fields": {
                  "cardToken": {
                    "type": "string",
                    "id": 1,
                    "rule": "optional"
                  }
                }
              },
              "LockCardResponse": {
                "fields": {
                  "card": {
                    "type": "squareup.bbdebit.cardmanagement.Card",
                    "id": 1,
                    "rule": "optional"
                  },
                  "errors": {
                    "type": "squareup.bbdebit.cardmanagement.Error",
                    "id": 2,
                    "rule": "repeated"
                  }
                }
              },
              "RetrieveCardRequest": {
                "fields": {
                  "cardToken": {
                    "type": "string",
                    "id": 1,
                    "rule": "optional"
                  },
                  "fieldMask": {
                    "type": "google.protobuf.FieldMask",
                    "id": 2,
                    "rule": "optional"
                  }
                }
              },
              "RetrieveCardResponse": {
                "fields": {
                  "card": {
                    "type": "squareup.bbdebit.cardmanagement.Card",
                    "id": 1,
                    "rule": "optional"
                  },
                  "errors": {
                    "type": "squareup.bbdebit.cardmanagement.RetrieveCardResponse.RetrieveCardError",
                    "id": 2,
                    "rule": "repeated"
                  }
                },
                "nested": {
                  "RetrieveCardError": {
                    "values": {
                      "RETRIEVE_CARD_ERROR_DO_NOT_USE": 0,
                      "RETRIEVE_CARD_ERROR_INVALID_CARD_TOKEN": 1
                    }
                  }
                }
              },
              "RetrieveCardRelationshipsRequest": {
                "fields": {
                  "cardToken": {
                    "type": "string",
                    "id": 1,
                    "rule": "optional"
                  }
                }
              },
              "RetrieveCardRelationshipsResponse": {
                "fields": {
                  "relationships": {
                    "type": "squareup.bbdebit.cardmanagement.RetrieveCardRelationshipsResponse.Relationship",
                    "id": 1,
                    "rule": "repeated"
                  }
                },
                "nested": {
                  "Relationship": {
                    "values": {
                      "RELATIONSHIP_DO_NOT_USE": 0,
                      "RELATIONSHIP_ACCOUNT_HOLDER": 1,
                      "RELATIONSHIP_CARD_HOLDER": 2
                    }
                  }
                }
              },
              "Relationship": {
                "values": {
                  "RELATIONSHIP_DO_NOT_USE": 0,
                  "RELATIONSHIP_CARDHOLDER": 1,
                  "RELATIONSHIP_ACCOUNT_HOLDER": 2
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
                    "type": "squareup.bbdebit.cardmanagement.SetPinResponse.SetPinError",
                    "id": 1,
                    "rule": "repeated"
                  }
                },
                "nested": {
                  "SetPinError": {
                    "values": {
                      "SET_PIN_ERROR_DO_NOT_USE": 0,
                      "SET_PIN_ERROR_INVALID_CARD_TOKEN": 1,
                      "SET_PIN_ERROR_UNAUTHORIZED": 2,
                      "SET_PIN_ERROR_WEAK_PIN": 3
                    }
                  }
                }
              },
              "TerminateCardRequest": {
                "fields": {
                  "cardToken": {
                    "type": "string",
                    "id": 1,
                    "rule": "optional"
                  },
                  "reason": {
                    "type": "squareup.bbdebit.cardmanagement.TerminateCardRequest.TerminateCardReason",
                    "id": 2,
                    "rule": "optional"
                  }
                },
                "nested": {
                  "TerminateCardReason": {
                    "values": {
                      "TERMINATE_CARD_REASON_DO_NOT_USE": 0,
                      "TERMINATE_CARD_REASON_LOST_OR_STOLEN": 1,
                      "TERMINATE_CARD_REASON_DAMAGED": 2,
                      "TERMINATE_CARD_REASON_CARD_NOT_RECEIVED": 3,
                      "TERMINATE_CARD_REASON_CANCEL": 4,
                      "TERMINATE_CARD_REASON_ACCOUNT_CLOSED": 5,
                      "TERMINATE_CARD_REASON_FRAUD": 6,
                      "TERMINATE_CARD_REASON_EXPIRED": 7,
                      "TERMINATE_CARD_REASON_REISSUED": 8,
                      "TERMINATE_CARD_REASON_OTHER": 9
                    }
                  }
                }
              },
              "TerminateCardResponse": {
                "fields": {
                  "errors": {
                    "type": "squareup.bbdebit.cardmanagement.TerminateCardResponse.TerminateCardError",
                    "id": 1,
                    "rule": "repeated"
                  }
                },
                "nested": {
                  "TerminateCardError": {
                    "values": {
                      "TERMINATE_CARD_ERROR_DO_NOT_USE": 0,
                      "TERMINATE_CARD_ERROR_INVALID_CARD_TOKEN": 1,
                      "TERMINATE_CARD_ERROR_CARD_ALREADY_TERMINATED": 2
                    }
                  }
                }
              },
              "UnlockCardRequest": {
                "fields": {
                  "cardToken": {
                    "type": "string",
                    "id": 1,
                    "rule": "optional"
                  }
                }
              },
              "UnlockCardResponse": {
                "fields": {
                  "card": {
                    "type": "squareup.bbdebit.cardmanagement.Card",
                    "id": 1,
                    "rule": "optional"
                  },
                  "errors": {
                    "type": "squareup.bbdebit.cardmanagement.Error",
                    "id": 2,
                    "rule": "repeated"
                  }
                }
              },
              "CardManagementService": {
                "methods": {
                  "ActivateCard": {
                    "requestType": "squareup.bbdebit.cardmanagement.ActivateCardRequest",
                    "responseType": "squareup.bbdebit.cardmanagement.ActivateCardResponse"
                  },
                  "CreateCard": {
                    "requestType": "squareup.bbdebit.cardmanagement.CreateCardRequest",
                    "responseType": "squareup.bbdebit.cardmanagement.CreateCardResponse"
                  },
                  "ListCards": {
                    "requestType": "squareup.bbdebit.cardmanagement.ListCardsRequest",
                    "responseType": "squareup.bbdebit.cardmanagement.ListCardsResponse"
                  },
                  "LockCard": {
                    "requestType": "squareup.bbdebit.cardmanagement.LockCardRequest",
                    "responseType": "squareup.bbdebit.cardmanagement.LockCardResponse"
                  },
                  "RetrieveCard": {
                    "requestType": "squareup.bbdebit.cardmanagement.RetrieveCardRequest",
                    "responseType": "squareup.bbdebit.cardmanagement.RetrieveCardResponse"
                  },
                  "RetrieveCardRelationships": {
                    "requestType": "squareup.bbdebit.cardmanagement.RetrieveCardRelationshipsRequest",
                    "responseType": "squareup.bbdebit.cardmanagement.RetrieveCardRelationshipsResponse"
                  },
                  "SetPin": {
                    "requestType": "squareup.bbdebit.cardmanagement.SetPinRequest",
                    "responseType": "squareup.bbdebit.cardmanagement.SetPinResponse"
                  },
                  "TerminateCard": {
                    "requestType": "squareup.bbdebit.cardmanagement.TerminateCardRequest",
                    "responseType": "squareup.bbdebit.cardmanagement.TerminateCardResponse"
                  },
                  "UnlockCard": {
                    "requestType": "squareup.bbdebit.cardmanagement.UnlockCardRequest",
                    "responseType": "squareup.bbdebit.cardmanagement.UnlockCardResponse"
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
 * SOURCE Error @ squareup/bbdebit/cardmanagement.proto at 17:1
 */
export const Error = $root.lookupType('squareup.bbdebit.cardmanagement.Error');
fixType(Error, {
  category: { required: true },
  code: { required: true },
});
Builder.createAndAttachToType(Error);
/**
 * SOURCE Category @ squareup/bbdebit/cardmanagement.proto at 18:3
 */
Error.Category = $root.lookupEnum('squareup.bbdebit.cardmanagement.Error.Category').values;
/**
 * SOURCE Code @ squareup/bbdebit/cardmanagement.proto at 40:3
 */
Error.Code = $root.lookupEnum('squareup.bbdebit.cardmanagement.Error.Code').values;
/**
 * SOURCE ActivateCardRequest @ squareup/bbdebit/cardmanagement.proto at 81:1
 */
export const ActivateCardRequest = $root.lookupType('squareup.bbdebit.cardmanagement.ActivateCardRequest');
fixType(ActivateCardRequest, {
  cardToken: { notEmpty: true },
  expiration: { required: true },
  cvv: { notEmpty: true },
});
Builder.createAndAttachToType(ActivateCardRequest);
/**
 * SOURCE ActivateCardResponse @ squareup/bbdebit/cardmanagement.proto at 90:1
 */
export const ActivateCardResponse = $root.lookupType('squareup.bbdebit.cardmanagement.ActivateCardResponse');
fixType(ActivateCardResponse);
Builder.createAndAttachToType(ActivateCardResponse);
/**
 * SOURCE ActivateCardError @ squareup/bbdebit/cardmanagement.proto at 96:3
 */
ActivateCardResponse.ActivateCardError = $root.lookupEnum('squareup.bbdebit.cardmanagement.ActivateCardResponse.ActivateCardError').values;
/**
 * SOURCE Card @ squareup/bbdebit/cardmanagement.proto at 102:1
 */
export const Card = $root.lookupType('squareup.bbdebit.cardmanagement.Card');
fixType(Card);
Builder.createAndAttachToType(Card);
/**
 * SOURCE CardBrand @ squareup/bbdebit/cardmanagement.proto at 123:1
 */
export const CardBrand = $root.lookupEnum('squareup.bbdebit.cardmanagement.CardBrand').values;
/**
 * SOURCE CardStatus @ squareup/bbdebit/cardmanagement.proto at 128:1
 */
export const CardStatus = $root.lookupEnum('squareup.bbdebit.cardmanagement.CardStatus').values;
/**
 * SOURCE CardFulfillment @ squareup/bbdebit/cardmanagement.proto at 139:1
 */
export const CardFulfillment = $root.lookupType('squareup.bbdebit.cardmanagement.CardFulfillment');
fixType(CardFulfillment);
Builder.createAndAttachToType(CardFulfillment);
/**
 * SOURCE FulfillmentStatus @ squareup/bbdebit/cardmanagement.proto at 144:3
 */
CardFulfillment.FulfillmentStatus = $root.lookupEnum('squareup.bbdebit.cardmanagement.CardFulfillment.FulfillmentStatus').values;
/**
 * SOURCE Customization @ squareup/bbdebit/cardmanagement.proto at 155:1
 */
export const Customization = $root.lookupType('squareup.bbdebit.cardmanagement.Customization');
fixType(Customization, {
  id: { notEmpty: true },
});
Builder.createAndAttachToType(Customization);
/**
 * SOURCE CardText @ squareup/bbdebit/cardmanagement.proto at 165:3
 */
Customization.CardText = $root.lookupType('squareup.bbdebit.cardmanagement.Customization.CardText');
fixType(Customization.CardText, {
  type: { required: true },
});
Builder.createAndAttachToType(Customization.CardText);
/**
 * SOURCE Type @ squareup/bbdebit/cardmanagement.proto at 175:5
 */
Customization.CardText.Type = $root.lookupEnum('squareup.bbdebit.cardmanagement.Customization.CardText.Type').values;
/**
 * SOURCE CreateCardRequest @ squareup/bbdebit/cardmanagement.proto at 188:1
 */
export const CreateCardRequest = $root.lookupType('squareup.bbdebit.cardmanagement.CreateCardRequest');
fixType(CreateCardRequest, {
  idempotenceKey: { notEmpty: true },
  groupType: { required: true },
  cardFulfillment: { required: true },
});
Builder.createAndAttachToType(CreateCardRequest);
/**
 * SOURCE CardGroupType @ squareup/bbdebit/cardmanagement.proto at 214:3
 */
CreateCardRequest.CardGroupType = $root.lookupEnum('squareup.bbdebit.cardmanagement.CreateCardRequest.CardGroupType').values;
/**
 * SOURCE CreateCardResponse @ squareup/bbdebit/cardmanagement.proto at 227:1
 */
export const CreateCardResponse = $root.lookupType('squareup.bbdebit.cardmanagement.CreateCardResponse');
fixType(CreateCardResponse);
Builder.createAndAttachToType(CreateCardResponse);
/**
 * SOURCE CreateCardError @ squareup/bbdebit/cardmanagement.proto at 237:3
 */
CreateCardResponse.CreateCardError = $root.lookupEnum('squareup.bbdebit.cardmanagement.CreateCardResponse.CreateCardError').values;
/**
 * SOURCE ListCardsRequest @ squareup/bbdebit/cardmanagement.proto at 243:1
 */
export const ListCardsRequest = $root.lookupType('squareup.bbdebit.cardmanagement.ListCardsRequest');
fixType(ListCardsRequest);
Builder.createAndAttachToType(ListCardsRequest);
/**
 * SOURCE SortOrder @ squareup/bbdebit/cardmanagement.proto at 244:3
 */
ListCardsRequest.SortOrder = $root.lookupEnum('squareup.bbdebit.cardmanagement.ListCardsRequest.SortOrder').values;
/**
 * SOURCE ListCardsResponse @ squareup/bbdebit/cardmanagement.proto at 279:1
 */
export const ListCardsResponse = $root.lookupType('squareup.bbdebit.cardmanagement.ListCardsResponse');
fixType(ListCardsResponse);
Builder.createAndAttachToType(ListCardsResponse);
/**
 * SOURCE LockCardRequest @ squareup/bbdebit/cardmanagement.proto at 286:1
 */
export const LockCardRequest = $root.lookupType('squareup.bbdebit.cardmanagement.LockCardRequest');
fixType(LockCardRequest, {
  cardToken: { notEmpty: true },
});
Builder.createAndAttachToType(LockCardRequest);
/**
 * SOURCE LockCardResponse @ squareup/bbdebit/cardmanagement.proto at 293:1
 */
export const LockCardResponse = $root.lookupType('squareup.bbdebit.cardmanagement.LockCardResponse');
fixType(LockCardResponse);
Builder.createAndAttachToType(LockCardResponse);
/**
 * SOURCE RetrieveCardRequest @ squareup/bbdebit/cardmanagement.proto at 304:1
 */
export const RetrieveCardRequest = $root.lookupType('squareup.bbdebit.cardmanagement.RetrieveCardRequest');
fixType(RetrieveCardRequest, {
  cardToken: { notEmpty: true },
});
Builder.createAndAttachToType(RetrieveCardRequest);
/**
 * SOURCE RetrieveCardResponse @ squareup/bbdebit/cardmanagement.proto at 317:1
 */
export const RetrieveCardResponse = $root.lookupType('squareup.bbdebit.cardmanagement.RetrieveCardResponse');
fixType(RetrieveCardResponse);
Builder.createAndAttachToType(RetrieveCardResponse);
/**
 * SOURCE RetrieveCardError @ squareup/bbdebit/cardmanagement.proto at 327:3
 */
RetrieveCardResponse.RetrieveCardError = $root.lookupEnum('squareup.bbdebit.cardmanagement.RetrieveCardResponse.RetrieveCardError').values;
/**
 * Temporary endpoint that allows the client to retrieve card relationships. This entire section will
 * be deprecated once clients migrate to using ListCards to retrieve the Card relationship.
 *
 * SOURCE RetrieveCardRelationshipsRequest @ squareup/bbdebit/cardmanagement.proto at 340:1
 */
export const RetrieveCardRelationshipsRequest = $root.lookupType('squareup.bbdebit.cardmanagement.RetrieveCardRelationshipsRequest');
fixType(RetrieveCardRelationshipsRequest, {
  cardToken: { notEmpty: true },
});
Builder.createAndAttachToType(RetrieveCardRelationshipsRequest);
/**
 * SOURCE RetrieveCardRelationshipsResponse @ squareup/bbdebit/cardmanagement.proto at 344:1
 */
export const RetrieveCardRelationshipsResponse = $root.lookupType('squareup.bbdebit.cardmanagement.RetrieveCardRelationshipsResponse');
fixType(RetrieveCardRelationshipsResponse);
Builder.createAndAttachToType(RetrieveCardRelationshipsResponse);
/**
 * SOURCE Relationship @ squareup/bbdebit/cardmanagement.proto at 347:3
 */
RetrieveCardRelationshipsResponse.Relationship = $root.lookupEnum('squareup.bbdebit.cardmanagement.RetrieveCardRelationshipsResponse.Relationship').values;
/**
 * SOURCE Relationship @ squareup/bbdebit/cardmanagement.proto at 354:1
 */
export const Relationship = $root.lookupEnum('squareup.bbdebit.cardmanagement.Relationship').values;
/**
 * SOURCE SetPinRequest @ squareup/bbdebit/cardmanagement.proto at 360:1
 */
export const SetPinRequest = $root.lookupType('squareup.bbdebit.cardmanagement.SetPinRequest');
fixType(SetPinRequest, {
  cardToken: { required: true },
  pin: { required: true },
});
Builder.createAndAttachToType(SetPinRequest);
/**
 * SOURCE SetPinResponse @ squareup/bbdebit/cardmanagement.proto at 371:1
 */
export const SetPinResponse = $root.lookupType('squareup.bbdebit.cardmanagement.SetPinResponse');
fixType(SetPinResponse);
Builder.createAndAttachToType(SetPinResponse);
/**
 * SOURCE SetPinError @ squareup/bbdebit/cardmanagement.proto at 374:3
 */
SetPinResponse.SetPinError = $root.lookupEnum('squareup.bbdebit.cardmanagement.SetPinResponse.SetPinError').values;
/**
 * SOURCE TerminateCardRequest @ squareup/bbdebit/cardmanagement.proto at 392:1
 */
export const TerminateCardRequest = $root.lookupType('squareup.bbdebit.cardmanagement.TerminateCardRequest');
fixType(TerminateCardRequest, {
  cardToken: { notEmpty: true },
  reason: { required: true },
});
Builder.createAndAttachToType(TerminateCardRequest);
/**
 * SOURCE TerminateCardReason @ squareup/bbdebit/cardmanagement.proto at 402:3
 */
TerminateCardRequest.TerminateCardReason = $root.lookupEnum('squareup.bbdebit.cardmanagement.TerminateCardRequest.TerminateCardReason').values;
/**
 * SOURCE TerminateCardResponse @ squareup/bbdebit/cardmanagement.proto at 444:1
 */
export const TerminateCardResponse = $root.lookupType('squareup.bbdebit.cardmanagement.TerminateCardResponse');
fixType(TerminateCardResponse);
Builder.createAndAttachToType(TerminateCardResponse);
/**
 * SOURCE TerminateCardError @ squareup/bbdebit/cardmanagement.proto at 447:3
 */
TerminateCardResponse.TerminateCardError = $root.lookupEnum('squareup.bbdebit.cardmanagement.TerminateCardResponse.TerminateCardError').values;
/**
 * SOURCE UnlockCardRequest @ squareup/bbdebit/cardmanagement.proto at 460:1
 */
export const UnlockCardRequest = $root.lookupType('squareup.bbdebit.cardmanagement.UnlockCardRequest');
fixType(UnlockCardRequest, {
  cardToken: { notEmpty: true },
});
Builder.createAndAttachToType(UnlockCardRequest);
/**
 * SOURCE UnlockCardResponse @ squareup/bbdebit/cardmanagement.proto at 467:1
 */
export const UnlockCardResponse = $root.lookupType('squareup.bbdebit.cardmanagement.UnlockCardResponse');
fixType(UnlockCardResponse);
Builder.createAndAttachToType(UnlockCardResponse);
/**
 * SOURCE CardManagementService @ squareup/bbdebit/cardmanagement.proto at 478:1
 */
export const CardManagementService = $root.lookupService('squareup.bbdebit.cardmanagement.CardManagementService');
