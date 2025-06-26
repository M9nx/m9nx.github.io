/**
 * GENERATED CODE – DO NOT EDIT!
 */
/* eslint-disable */
import * as $protobuf from 'protobufjs/light';
import { fixType } from '../../../Fixes';
import Builder from '../../../Builder';
import '../bankingweb/v1/person_profile_service';
import '../../common/countries';
import '../../address/country_data';
import './bill_pay';

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
                  "BootstrapRequest": {
                    "fields": {}
                  },
                  "BootstrapResponse": {
                    "fields": {
                      "authenticated": {
                        "type": "squareup.bbfrontend.service.v1.BootstrapResponse.Authenticated",
                        "id": 1
                      },
                      "unauthenticated": {
                        "type": "squareup.bbfrontend.service.v1.BootstrapResponse.Unauthenticated",
                        "id": 2
                      }
                    },
                    "nested": {
                      "Authenticated": {
                        "fields": {
                          "personProfile": {
                            "type": "squareup.bbfrontend.bankingweb.v1.Profile",
                            "id": 1,
                            "rule": "optional"
                          },
                          "status": {
                            "type": "squareup.bbfrontend.service.v1.BootstrapResponse.Authenticated.Status",
                            "id": 2,
                            "rule": "optional"
                          },
                          "authorized": {
                            "type": "squareup.bbfrontend.service.v1.BootstrapResponse.Authenticated.Authorized",
                            "id": 3
                          },
                          "unauthorized": {
                            "type": "squareup.bbfrontend.service.v1.BootstrapResponse.Authenticated.Unauthorized",
                            "id": 4
                          }
                        },
                        "nested": {
                          "Status": {
                            "values": {
                              "NEW_USER": 1,
                              "EXISTING_USER": 2
                            }
                          },
                          "Authorized": {
                            "fields": {}
                          },
                          "Unauthorized": {
                            "fields": {}
                          },
                          "authorization": {
                            "oneof": [
                              "authorized",
                              "unauthorized"
                            ]
                          }
                        }
                      },
                      "Unauthenticated": {
                        "fields": {}
                      },
                      "bootstrap": {
                        "oneof": [
                          "authenticated",
                          "unauthenticated"
                        ]
                      }
                    }
                  },
                  "GetCountryAddressDataRequest": {
                    "fields": {
                      "countryCode": {
                        "type": "squareup.common.countries.Country",
                        "id": 1,
                        "rule": "optional"
                      }
                    }
                  },
                  "GetCountryAddressDataResponse": {
                    "fields": {
                      "countryAddressData": {
                        "type": "squareup.address.country_data.CountryAddressData",
                        "id": 1,
                        "rule": "optional"
                      }
                    }
                  },
                  "WebService": {
                    "methods": {
                      "GetBillPayData": {
                        "requestType": "squareup.bbfrontend.service.v1.GetBillPayDataRequest",
                        "responseType": "squareup.bbfrontend.service.v1.GetBillPayDataResponse"
                      },
                      "GetBootstrap": {
                        "requestType": "squareup.bbfrontend.service.v1.BootstrapRequest",
                        "responseType": "squareup.bbfrontend.service.v1.BootstrapResponse"
                      },
                      "GetCountryAddressData": {
                        "requestType": "squareup.bbfrontend.service.v1.GetCountryAddressDataRequest",
                        "responseType": "squareup.bbfrontend.service.v1.GetCountryAddressDataResponse"
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
 * GetBootstrap
 * Bootstrap data for application based on login/authentication status
 *
 * SOURCE BootstrapRequest @ squareup/bbfrontend/v1/web_service.proto at 19:1
 */
export const BootstrapRequest = $root.lookupType('squareup.bbfrontend.service.v1.BootstrapRequest');
fixType(BootstrapRequest);
Builder.createAndAttachToType(BootstrapRequest);
/**
 * SOURCE BootstrapResponse @ squareup/bbfrontend/v1/web_service.proto at 21:1
 */
export const BootstrapResponse = $root.lookupType('squareup.bbfrontend.service.v1.BootstrapResponse');
fixType(BootstrapResponse);
Builder.createAndAttachToType(BootstrapResponse);
/**
 * SOURCE Authenticated @ squareup/bbfrontend/v1/web_service.proto at 27:3
 */
BootstrapResponse.Authenticated = $root.lookupType('squareup.bbfrontend.service.v1.BootstrapResponse.Authenticated');
fixType(BootstrapResponse.Authenticated);
Builder.createAndAttachToType(BootstrapResponse.Authenticated);
/**
 * SOURCE Status @ squareup/bbfrontend/v1/web_service.proto at 38:5
 */
BootstrapResponse.Authenticated.Status = $root.lookupEnum('squareup.bbfrontend.service.v1.BootstrapResponse.Authenticated.Status').values;
/**
 * Denotes person is logged in/authenticated and authorized to use banking web
 *
 * SOURCE Authorized @ squareup/bbfrontend/v1/web_service.proto at 44:5
 */
BootstrapResponse.Authenticated.Authorized = $root.lookupType('squareup.bbfrontend.service.v1.BootstrapResponse.Authenticated.Authorized');
fixType(BootstrapResponse.Authenticated.Authorized);
Builder.createAndAttachToType(BootstrapResponse.Authenticated.Authorized);
/**
 * Denotes person is not authorized to use banking web even though they are logged in
 * For example, a seller who has a square account but does not have any card invitations.
 *
 * SOURCE Unauthorized @ squareup/bbfrontend/v1/web_service.proto at 49:5
 */
BootstrapResponse.Authenticated.Unauthorized = $root.lookupType('squareup.bbfrontend.service.v1.BootstrapResponse.Authenticated.Unauthorized');
fixType(BootstrapResponse.Authenticated.Unauthorized);
Builder.createAndAttachToType(BootstrapResponse.Authenticated.Unauthorized);
/**
 * SOURCE Unauthenticated @ squareup/bbfrontend/v1/web_service.proto at 52:3
 */
BootstrapResponse.Unauthenticated = $root.lookupType('squareup.bbfrontend.service.v1.BootstrapResponse.Unauthenticated');
fixType(BootstrapResponse.Unauthenticated);
Builder.createAndAttachToType(BootstrapResponse.Unauthenticated);
/**
 * SOURCE GetCountryAddressDataRequest @ squareup/bbfrontend/v1/web_service.proto at 55:1
 */
export const GetCountryAddressDataRequest = $root.lookupType('squareup.bbfrontend.service.v1.GetCountryAddressDataRequest');
fixType(GetCountryAddressDataRequest);
Builder.createAndAttachToType(GetCountryAddressDataRequest);
/**
 * SOURCE GetCountryAddressDataResponse @ squareup/bbfrontend/v1/web_service.proto at 59:1
 */
export const GetCountryAddressDataResponse = $root.lookupType('squareup.bbfrontend.service.v1.GetCountryAddressDataResponse');
fixType(GetCountryAddressDataResponse);
Builder.createAndAttachToType(GetCountryAddressDataResponse);
/**
 * SOURCE WebService @ squareup/bbfrontend/v1/web_service.proto at 63:1
 */
export const WebService = $root.lookupService('squareup.bbfrontend.service.v1.WebService');
