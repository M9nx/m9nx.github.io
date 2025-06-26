/**
 * GENERATED CODE – DO NOT EDIT!
 */
/* eslint-disable */
import * as $protobuf from 'protobufjs/light';
import { fixType } from '../../../../Fixes';
import Builder from '../../../../Builder';
import '../../../common/time';
import '../../../common/location';
import './card_model';

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
                  "ActivateCardRequest": {
                    "fields": {
                      "cardToken": {
                        "type": "string",
                        "id": 1,
                        "rule": "optional"
                      },
                      "activation": {
                        "type": "squareup.bbfrontend.bankingweb.v1.ActivateCardRequest.ExpirationAndCVC",
                        "id": 2,
                        "rule": "optional"
                      }
                    },
                    "nested": {
                      "ExpirationAndCVC": {
                        "fields": {
                          "expiration": {
                            "type": "squareup.common.time.YearMonth",
                            "id": 1,
                            "rule": "optional"
                          },
                          "cvc": {
                            "type": "string",
                            "id": 2,
                            "rule": "optional"
                          }
                        }
                      }
                    }
                  },
                  "ActivateCardResponse": {
                    "fields": {
                      "error": {
                        "type": "squareup.bbfrontend.bankingweb.v1.ActivateCardResponse.ActivateCardError",
                        "id": 1,
                        "rule": "repeated"
                      }
                    },
                    "nested": {
                      "ActivateCardError": {
                        "values": {
                          "ACTIVATE_CARD_ERROR_UNKNOWN": 0,
                          "ACTIVATE_CARD_ERROR_INVALID_EXPIRATION_CVC": 1,
                          "ACTIVATE_CARD_ERROR_UNAUTHORIZED": 2
                        }
                      }
                    }
                  },
                  "CreateCardRequest": {
                    "fields": {
                      "idempotencyKey": {
                        "type": "string",
                        "id": 4,
                        "rule": "optional"
                      },
                      "cardInvitationToken": {
                        "type": "string",
                        "id": 1,
                        "rule": "optional"
                      },
                      "cardCustomizationToken": {
                        "type": "string",
                        "id": 2,
                        "rule": "optional"
                      },
                      "shippingAddress": {
                        "type": "squareup.common.location.GlobalAddress",
                        "id": 3,
                        "rule": "optional"
                      }
                    }
                  },
                  "CreateCardResponse": {
                    "fields": {
                      "cardToken": {
                        "type": "string",
                        "id": 1,
                        "rule": "optional"
                      },
                      "error": {
                        "type": "squareup.bbfrontend.bankingweb.v1.CreateCardResponse.IssueCardError",
                        "id": 2,
                        "rule": "repeated"
                      }
                    },
                    "nested": {
                      "IssueCardError": {
                        "values": {
                          "ISSUE_CARD_ERROR_UNKNOWN": 0,
                          "ISSUE_CARD_ERROR_UNAUTHORIZED": 1,
                          "ISSUE_CARD_ERROR_OBLIGATION_REQUIRES_COMPLIANCE_VERIFICATION": 2
                        }
                      }
                    }
                  },
                  "CreateCardCustomizationRequest": {
                    "fields": {
                      "idempotencyKey": {
                        "type": "string",
                        "id": 4,
                        "rule": "optional"
                      },
                      "cardInvitationToken": {
                        "type": "string",
                        "id": 1,
                        "rule": "optional"
                      },
                      "imageBytes": {
                        "type": "bytes",
                        "id": 2,
                        "rule": "optional"
                      },
                      "mimeType": {
                        "type": "string",
                        "id": 3,
                        "rule": "optional"
                      }
                    }
                  },
                  "CreateCardCustomizationResponse": {
                    "fields": {
                      "cardCustomizationToken": {
                        "type": "string",
                        "id": 1,
                        "rule": "optional"
                      }
                    }
                  },
                  "ListCardsRequest": {
                    "fields": {}
                  },
                  "ListCardsResponse": {
                    "fields": {
                      "cards": {
                        "type": "squareup.bbfrontend.bankingweb.v1.Card",
                        "id": 1,
                        "rule": "repeated"
                      }
                    }
                  },
                  "RetrieveCardRequest": {
                    "fields": {
                      "cardId": {
                        "type": "string",
                        "id": 1,
                        "rule": "optional"
                      }
                    }
                  },
                  "RetrieveCardResponse": {
                    "fields": {
                      "card": {
                        "type": "squareup.bbfrontend.bankingweb.v1.Card",
                        "id": 1,
                        "rule": "optional"
                      }
                    }
                  },
                  "UpdateCardRequest": {
                    "fields": {
                      "card": {
                        "type": "squareup.bbfrontend.bankingweb.v1.Card",
                        "id": 1,
                        "rule": "optional"
                      }
                    }
                  },
                  "UpdateCardResponse": {
                    "fields": {
                      "card": {
                        "type": "squareup.bbfrontend.bankingweb.v1.Card",
                        "id": 1,
                        "rule": "optional"
                      },
                      "error": {
                        "type": "squareup.bbfrontend.bankingweb.v1.UpdateCardResponse.UpdateCardError",
                        "id": 2,
                        "rule": "repeated"
                      }
                    },
                    "nested": {
                      "UpdateCardError": {
                        "values": {
                          "UPDATE_CARD_ERROR_UNKNOWN": 0,
                          "UPDATE_CARD_ERROR_CANNOT_UPDATE_IMMUTABLE_FIELD": 1,
                          "UPDATE_CARD_ERROR_UPDATE_FAILURE": 2
                        }
                      }
                    }
                  },
                  "BankingWebCardService": {
                    "methods": {
                      "ActivateCard": {
                        "requestType": "squareup.bbfrontend.bankingweb.v1.ActivateCardRequest",
                        "responseType": "squareup.bbfrontend.bankingweb.v1.ActivateCardResponse"
                      },
                      "CreateCard": {
                        "requestType": "squareup.bbfrontend.bankingweb.v1.CreateCardRequest",
                        "responseType": "squareup.bbfrontend.bankingweb.v1.CreateCardResponse"
                      },
                      "CreateCardCustomization": {
                        "requestType": "squareup.bbfrontend.bankingweb.v1.CreateCardCustomizationRequest",
                        "responseType": "squareup.bbfrontend.bankingweb.v1.CreateCardCustomizationResponse"
                      },
                      "ListCards": {
                        "requestType": "squareup.bbfrontend.bankingweb.v1.ListCardsRequest",
                        "responseType": "squareup.bbfrontend.bankingweb.v1.ListCardsResponse"
                      },
                      "RetrieveCard": {
                        "requestType": "squareup.bbfrontend.bankingweb.v1.RetrieveCardRequest",
                        "responseType": "squareup.bbfrontend.bankingweb.v1.RetrieveCardResponse"
                      },
                      "UpdateCard": {
                        "requestType": "squareup.bbfrontend.bankingweb.v1.UpdateCardRequest",
                        "responseType": "squareup.bbfrontend.bankingweb.v1.UpdateCardResponse"
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
 * SOURCE ActivateCardRequest @ squareup/bbfrontend/bankingweb/v1/card_service.proto at 47:1
 */
export const ActivateCardRequest = $root.lookupType('squareup.bbfrontend.bankingweb.v1.ActivateCardRequest');
fixType(ActivateCardRequest);
Builder.createAndAttachToType(ActivateCardRequest);
/**
 * SOURCE ExpirationAndCVC @ squareup/bbfrontend/bankingweb/v1/card_service.proto at 51:3
 */
ActivateCardRequest.ExpirationAndCVC = $root.lookupType('squareup.bbfrontend.bankingweb.v1.ActivateCardRequest.ExpirationAndCVC');
fixType(ActivateCardRequest.ExpirationAndCVC);
Builder.createAndAttachToType(ActivateCardRequest.ExpirationAndCVC);
/**
 * SOURCE ActivateCardResponse @ squareup/bbfrontend/bankingweb/v1/card_service.proto at 57:1
 */
export const ActivateCardResponse = $root.lookupType('squareup.bbfrontend.bankingweb.v1.ActivateCardResponse');
fixType(ActivateCardResponse);
Builder.createAndAttachToType(ActivateCardResponse);
/**
 * SOURCE ActivateCardError @ squareup/bbfrontend/bankingweb/v1/card_service.proto at 60:3
 */
ActivateCardResponse.ActivateCardError = $root.lookupEnum('squareup.bbfrontend.bankingweb.v1.ActivateCardResponse.ActivateCardError').values;
/**
 * SOURCE CreateCardRequest @ squareup/bbfrontend/bankingweb/v1/card_service.proto at 67:1
 */
export const CreateCardRequest = $root.lookupType('squareup.bbfrontend.bankingweb.v1.CreateCardRequest');
fixType(CreateCardRequest, {
  idempotencyKey: { notEmpty: true },
});
Builder.createAndAttachToType(CreateCardRequest);
/**
 * SOURCE CreateCardResponse @ squareup/bbfrontend/bankingweb/v1/card_service.proto at 77:1
 */
export const CreateCardResponse = $root.lookupType('squareup.bbfrontend.bankingweb.v1.CreateCardResponse');
fixType(CreateCardResponse);
Builder.createAndAttachToType(CreateCardResponse);
/**
 * SOURCE IssueCardError @ squareup/bbfrontend/bankingweb/v1/card_service.proto at 81:3
 */
CreateCardResponse.IssueCardError = $root.lookupEnum('squareup.bbfrontend.bankingweb.v1.CreateCardResponse.IssueCardError').values;
/**
 * SOURCE CreateCardCustomizationRequest @ squareup/bbfrontend/bankingweb/v1/card_service.proto at 92:1
 */
export const CreateCardCustomizationRequest = $root.lookupType('squareup.bbfrontend.bankingweb.v1.CreateCardCustomizationRequest');
fixType(CreateCardCustomizationRequest, {
  idempotencyKey: { notEmpty: true },
});
Builder.createAndAttachToType(CreateCardCustomizationRequest);
/**
 * SOURCE CreateCardCustomizationResponse @ squareup/bbfrontend/bankingweb/v1/card_service.proto at 99:1
 */
export const CreateCardCustomizationResponse = $root.lookupType('squareup.bbfrontend.bankingweb.v1.CreateCardCustomizationResponse');
fixType(CreateCardCustomizationResponse);
Builder.createAndAttachToType(CreateCardCustomizationResponse);
/**
 * SOURCE ListCardsRequest @ squareup/bbfrontend/bankingweb/v1/card_service.proto at 103:1
 */
export const ListCardsRequest = $root.lookupType('squareup.bbfrontend.bankingweb.v1.ListCardsRequest');
fixType(ListCardsRequest);
Builder.createAndAttachToType(ListCardsRequest);
/**
 * SOURCE ListCardsResponse @ squareup/bbfrontend/bankingweb/v1/card_service.proto at 105:1
 */
export const ListCardsResponse = $root.lookupType('squareup.bbfrontend.bankingweb.v1.ListCardsResponse');
fixType(ListCardsResponse);
Builder.createAndAttachToType(ListCardsResponse);
/**
 * SOURCE RetrieveCardRequest @ squareup/bbfrontend/bankingweb/v1/card_service.proto at 113:1
 */
export const RetrieveCardRequest = $root.lookupType('squareup.bbfrontend.bankingweb.v1.RetrieveCardRequest');
fixType(RetrieveCardRequest, {
  cardId: { notEmpty: true },
});
Builder.createAndAttachToType(RetrieveCardRequest);
/**
 * SOURCE RetrieveCardResponse @ squareup/bbfrontend/bankingweb/v1/card_service.proto at 119:1
 */
export const RetrieveCardResponse = $root.lookupType('squareup.bbfrontend.bankingweb.v1.RetrieveCardResponse');
fixType(RetrieveCardResponse);
Builder.createAndAttachToType(RetrieveCardResponse);
/**
 * SOURCE UpdateCardRequest @ squareup/bbfrontend/bankingweb/v1/card_service.proto at 124:1
 */
export const UpdateCardRequest = $root.lookupType('squareup.bbfrontend.bankingweb.v1.UpdateCardRequest');
fixType(UpdateCardRequest);
Builder.createAndAttachToType(UpdateCardRequest);
/**
 * SOURCE UpdateCardResponse @ squareup/bbfrontend/bankingweb/v1/card_service.proto at 128:1
 */
export const UpdateCardResponse = $root.lookupType('squareup.bbfrontend.bankingweb.v1.UpdateCardResponse');
fixType(UpdateCardResponse);
Builder.createAndAttachToType(UpdateCardResponse);
/**
 * SOURCE UpdateCardError @ squareup/bbfrontend/bankingweb/v1/card_service.proto at 132:3
 */
UpdateCardResponse.UpdateCardError = $root.lookupEnum('squareup.bbfrontend.bankingweb.v1.UpdateCardResponse.UpdateCardError').values;
/**
 * SOURCE BankingWebCardService @ squareup/bbfrontend/bankingweb/v1/card_service.proto at 17:1
 */
export const BankingWebCardService = $root.lookupService('squareup.bbfrontend.bankingweb.v1.BankingWebCardService');
