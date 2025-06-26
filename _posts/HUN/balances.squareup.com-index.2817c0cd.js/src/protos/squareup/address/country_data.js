/**
 * GENERATED CODE – DO NOT EDIT!
 */
/* eslint-disable */
import * as $protobuf from 'protobufjs/light';
import { fixType } from '../../Fixes';
import Builder from '../../Builder';

const $root = ($protobuf.roots['default']|| ($protobuf.roots['default'] = new $protobuf.Root()));

$root.addJSON({
  "squareup": {
    "nested": {
      "address": {
        "nested": {
          "country_data": {
            "nested": {
              "CountryAddressData": {
                "fields": {
                  "name": {
                    "type": "string",
                    "id": 1,
                    "rule": "optional"
                  },
                  "format": {
                    "type": "string",
                    "id": 2,
                    "rule": "optional"
                  },
                  "requiredFields": {
                    "type": "string",
                    "id": 3,
                    "rule": "optional"
                  },
                  "upperCaseFields": {
                    "type": "string",
                    "id": 4,
                    "rule": "optional"
                  },
                  "createMethod": {
                    "type": "squareup.address.country_data.CountryAddressData.InputMethod",
                    "id": 5,
                    "rule": "optional"
                  },
                  "editMethod": {
                    "type": "squareup.address.country_data.CountryAddressData.InputMethod",
                    "id": 6,
                    "rule": "optional"
                  },
                  "admin1Label": {
                    "type": "squareup.address.country_data.CountryAddressData.Admin1Scope.Admin1Label",
                    "id": 7,
                    "rule": "optional"
                  },
                  "localityLabel": {
                    "type": "squareup.address.country_data.CountryAddressData.LocalityScope.LocalityLabel",
                    "id": 8,
                    "rule": "optional"
                  },
                  "sublocalityLabel": {
                    "type": "squareup.address.country_data.CountryAddressData.SublocalityScope.SublocalityLabel",
                    "id": 9,
                    "rule": "optional"
                  },
                  "postalCodeLabel": {
                    "type": "squareup.address.country_data.CountryAddressData.PostalCodeScope.PostalCodeLabel",
                    "id": 10,
                    "rule": "optional"
                  },
                  "defaultLinecount": {
                    "type": "int32",
                    "id": 11,
                    "rule": "optional"
                  },
                  "examplePostalCodes": {
                    "type": "string",
                    "id": 12,
                    "rule": "repeated"
                  },
                  "admin1Values": {
                    "type": "squareup.address.country_data.CountryAddressData.NameNode",
                    "id": 13,
                    "rule": "repeated"
                  },
                  "sortingCodeLabel": {
                    "type": "squareup.address.country_data.CountryAddressData.SortingCodeScope.SortingCodeLabel",
                    "id": 14,
                    "rule": "optional"
                  },
                  "countryCode": {
                    "type": "string",
                    "id": 15,
                    "rule": "optional"
                  },
                  "locale": {
                    "type": "string",
                    "id": 16,
                    "rule": "optional"
                  }
                },
                "nested": {
                  "NameNode": {
                    "fields": {
                      "code": {
                        "type": "string",
                        "id": 1,
                        "rule": "optional"
                      },
                      "name": {
                        "type": "string",
                        "id": 2,
                        "rule": "optional"
                      },
                      "value": {
                        "type": "string",
                        "id": 3,
                        "rule": "optional"
                      }
                    }
                  },
                  "InputMethod": {
                    "values": {
                      "FORM": 0,
                      "INVERTED_DROPDOWNS": 1,
                      "CORRECT_AS_YOU_TYPE": 2
                    }
                  },
                  "Admin1Scope": {
                    "nested": {
                      "Admin1Label": {
                        "values": {
                          "PROVINCE": 0,
                          "AREA": 1,
                          "DEPARTMENT": 2,
                          "DISTRICT": 3,
                          "DO_SI": 4,
                          "EMIRATE": 5,
                          "ISLAND": 6,
                          "OBLAST": 7,
                          "PARISH": 8,
                          "PREFECTURE": 9,
                          "STATE": 10,
                          "COUNTY": 11
                        }
                      }
                    }
                  },
                  "LocalityScope": {
                    "nested": {
                      "LocalityLabel": {
                        "values": {
                          "CITY": 0,
                          "DISTRICT": 1,
                          "POST_TOWN": 2,
                          "SUBURB": 3,
                          "TOWN_CITY": 4
                        }
                      }
                    }
                  },
                  "SublocalityScope": {
                    "nested": {
                      "SublocalityLabel": {
                        "values": {
                          "SUBURB": 0,
                          "DISTRICT": 1,
                          "NEIGHBORHOOD": 2,
                          "TOWNLAND": 3,
                          "VILLAGE_TOWNSHIP": 4,
                          "TOWN": 5
                        }
                      }
                    }
                  },
                  "PostalCodeScope": {
                    "nested": {
                      "PostalCodeLabel": {
                        "values": {
                          "POSTAL": 0,
                          "EIRCODE": 1,
                          "PIN": 2,
                          "ZIP": 3
                        }
                      }
                    }
                  },
                  "SortingCodeScope": {
                    "nested": {
                      "SortingCodeLabel": {
                        "values": {
                          "CEDEX": 0
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
  }
});

/**
 * This is separate so these protos can be used in an offline library as well as via RPC
 * A representation of the data required to enter or format addresses for a given country.
 * Largely derived from https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata
 *
 * SOURCE CountryAddressData @ squareup/address/country_data.proto at 12:1
 */
export const CountryAddressData = $root.lookupType('squareup.address.country_data.CountryAddressData');
fixType(CountryAddressData);
Builder.createAndAttachToType(CountryAddressData);
/**
 * SOURCE NameNode @ squareup/address/country_data.proto at 81:3
 */
CountryAddressData.NameNode = $root.lookupType('squareup.address.country_data.CountryAddressData.NameNode');
fixType(CountryAddressData.NameNode);
Builder.createAndAttachToType(CountryAddressData.NameNode);
/**
 * SOURCE InputMethod @ squareup/address/country_data.proto at 92:3
 */
CountryAddressData.InputMethod = $root.lookupEnum('squareup.address.country_data.CountryAddressData.InputMethod').values;
/**
 * SOURCE Admin1Scope @ squareup/address/country_data.proto at 103:3
 */
CountryAddressData.Admin1Scope = {};
/**
 * SOURCE Admin1Label @ squareup/address/country_data.proto at 104:5
 */
CountryAddressData.Admin1Scope.Admin1Label = $root.lookupEnum('squareup.address.country_data.CountryAddressData.Admin1Scope.Admin1Label').values;
/**
 * SOURCE LocalityScope @ squareup/address/country_data.proto at 122:3
 */
CountryAddressData.LocalityScope = {};
/**
 * SOURCE LocalityLabel @ squareup/address/country_data.proto at 123:5
 */
CountryAddressData.LocalityScope.LocalityLabel = $root.lookupEnum('squareup.address.country_data.CountryAddressData.LocalityScope.LocalityLabel').values;
/**
 * SOURCE SublocalityScope @ squareup/address/country_data.proto at 132:3
 */
CountryAddressData.SublocalityScope = {};
/**
 * SOURCE SublocalityLabel @ squareup/address/country_data.proto at 133:5
 */
CountryAddressData.SublocalityScope.SublocalityLabel = $root.lookupEnum('squareup.address.country_data.CountryAddressData.SublocalityScope.SublocalityLabel').values;
/**
 * SOURCE PostalCodeScope @ squareup/address/country_data.proto at 145:3
 */
CountryAddressData.PostalCodeScope = {};
/**
 * SOURCE PostalCodeLabel @ squareup/address/country_data.proto at 146:5
 */
CountryAddressData.PostalCodeScope.PostalCodeLabel = $root.lookupEnum('squareup.address.country_data.CountryAddressData.PostalCodeScope.PostalCodeLabel').values;
/**
 * SOURCE SortingCodeScope @ squareup/address/country_data.proto at 156:3
 */
CountryAddressData.SortingCodeScope = {};
/**
 * SOURCE SortingCodeLabel @ squareup/address/country_data.proto at 157:5
 */
CountryAddressData.SortingCodeScope.SortingCodeLabel = $root.lookupEnum('squareup.address.country_data.CountryAddressData.SortingCodeScope.SortingCodeLabel').values;
