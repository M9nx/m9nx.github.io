/**
 * GENERATED CODE – DO NOT EDIT!
 */
/* eslint-disable */
import * as $protobuf from 'protobufjs/light';
import { fixType } from '../../Fixes';
import Builder from '../../Builder';
import './countries';

const $root = ($protobuf.roots['default']|| ($protobuf.roots['default'] = new $protobuf.Root()));

$root.addJSON({
  "squareup": {
    "nested": {
      "common": {
        "nested": {
          "location": {
            "nested": {
              "Coordinates": {
                "fields": {
                  "latitude": {
                    "type": "double",
                    "id": 1,
                    "rule": "optional"
                  },
                  "longitude": {
                    "type": "double",
                    "id": 2,
                    "rule": "optional"
                  },
                  "altitude": {
                    "type": "double",
                    "id": 3,
                    "rule": "optional"
                  },
                  "geographicAccuracy": {
                    "type": "double",
                    "id": 4,
                    "rule": "optional"
                  },
                  "altitudinalAccuracy": {
                    "type": "double",
                    "id": 5,
                    "rule": "optional"
                  },
                  "heading": {
                    "type": "double",
                    "id": 6,
                    "rule": "optional"
                  },
                  "speed": {
                    "type": "double",
                    "id": 7,
                    "rule": "optional"
                  }
                }
              },
              "GlobalAddress": {
                "fields": {
                  "addressLine1": {
                    "type": "string",
                    "id": 1,
                    "rule": "optional"
                  },
                  "addressLine2": {
                    "type": "string",
                    "id": 2,
                    "rule": "optional"
                  },
                  "addressLine3": {
                    "type": "string",
                    "id": 3,
                    "rule": "optional"
                  },
                  "locality": {
                    "type": "string",
                    "id": 6,
                    "rule": "optional"
                  },
                  "sublocality": {
                    "type": "string",
                    "id": 7,
                    "rule": "optional"
                  },
                  "administrativeDistrictLevel1": {
                    "type": "string",
                    "id": 13,
                    "rule": "optional"
                  },
                  "postalCode": {
                    "type": "string",
                    "id": 16,
                    "rule": "optional"
                  },
                  "countryCode": {
                    "type": "squareup.common.countries.Country",
                    "id": 17,
                    "rule": "optional"
                  },
                  "addressLine4": {
                    "type": "string",
                    "id": 4,
                    "rule": "optional"
                  },
                  "addressLine5": {
                    "type": "string",
                    "id": 5,
                    "rule": "optional"
                  },
                  "sublocality1": {
                    "type": "string",
                    "id": 8,
                    "rule": "optional"
                  },
                  "sublocality2": {
                    "type": "string",
                    "id": 9,
                    "rule": "optional"
                  },
                  "sublocality3": {
                    "type": "string",
                    "id": 10,
                    "rule": "optional"
                  },
                  "sublocality4": {
                    "type": "string",
                    "id": 11,
                    "rule": "optional"
                  },
                  "sublocality5": {
                    "type": "string",
                    "id": 12,
                    "rule": "optional"
                  },
                  "administrativeDistrictLevel2": {
                    "type": "string",
                    "id": 14,
                    "rule": "optional"
                  },
                  "administrativeDistrictLevel3": {
                    "type": "string",
                    "id": 15,
                    "rule": "optional"
                  },
                  "addressCoordinates": {
                    "type": "squareup.common.location.Coordinates",
                    "id": 18,
                    "rule": "optional"
                  },
                  "neighborhood": {
                    "type": "string",
                    "id": 19,
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
});

/**
 * Geographic coordinates specified in decimal degrees.
 *
 * SOURCE Coordinates @ squareup/common/location.proto at 19:1
 */
export const Coordinates = $root.lookupType('squareup.common.location.Coordinates');
fixType(Coordinates, {
  latitude: { required: true },
  longitude: { required: true },
});
Builder.createAndAttachToType(Coordinates);
/**
 * A postal address in any country. This format is based on Google's libaddressinput,
 * as described here: https://github.com/google/libaddressinput/wiki/AddressValidationMetadata .
 * The field layout for particular countries should match what the Address Service
 * stipulates in its "Country Format Data".
 * See "Country Format Data" in the the Address Service documentation
 * for details: https://registry.sqprod.co/applications/address .
 *
 * This format has dedicated fields for four address components:
 * postal code, locality (city), administrative district (state, prefecture, province),
 * and sublocality (town, village). These components have dedicated fields because
 * they are used by our software (tax computation, payment routing, compliance), and because
 * they are stable enough across and within countries for our software to successfully
 * track them.
 *
 * The remainder of the address is encoded in free-form "line" fields: address line 1
 * and address line 2. These fields are an escape hatch that lets the user type anything
 * they wish. These fields are free-form because there are too many different substructures
 * to the remaining address fields, and because our software would not use the substructure
 * even if we tried to parse it out. As such, we leave our users to enter these address lines
 * in free form, using whatever format seems appropriate to them for the address they are
 * trying to represent.
 *
 * Additional fields are defined in this proto but are now depreceated. Specifically, the
 * following fields are no longer used: sublocality_1 and above,
 * administrative_district_2 and above, and address lines 4-5. In the latest design of
 * this proto, information that would have gone into those fields is instead recorded
 * in address lines 1-2.
 *
 * All fields are canonically represented in a display-ready format. For example, Irish
 * counties are represented like "Co. Limerick" rather than "LK", but U.S. states are
 * represented like "SC" rather than "South Carolina". This encoding makes it convenient
 * to format an address, because the address components simply need to be placed in
 * the right order rather than decoded in any way. For the same reason, fields are
 * localized for delivery rather than for a particular user's language preference.
 * For example, an address for a Spanish-speaking seller in the US would still use
 * the English "New York City" in a GlobalAddress, because that's the way the city
 * would be rendered for delivery.
 *
 * Be wary when using this protobuf that some services have invalid data.
 * In particular:
 *   - Sometimes administrative_district_1 has an ISO code instead
 *     of a spelled out name.
 *   - Sometimes address_line_3 is in use even though it's deprecated.
 *
 * SOURCE GlobalAddress @ squareup/common/location.proto at 106:1
 */
export const GlobalAddress = $root.lookupType('squareup.common.location.GlobalAddress');
fixType(GlobalAddress);
Builder.createAndAttachToType(GlobalAddress);
