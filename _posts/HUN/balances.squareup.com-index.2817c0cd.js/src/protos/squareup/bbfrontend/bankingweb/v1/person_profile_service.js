/**
 * GENERATED CODE – DO NOT EDIT!
 */
/* eslint-disable */
import * as $protobuf from 'protobufjs/light';
import { fixType } from '../../../../Fixes';
import Builder from '../../../../Builder';

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
                  "Profile": {
                    "fields": {
                      "personToken": {
                        "type": "string",
                        "id": 1,
                        "rule": "optional"
                      },
                      "name": {
                        "type": "squareup.bbfrontend.bankingweb.v1.Profile.Name",
                        "id": 2,
                        "rule": "optional"
                      }
                    },
                    "nested": {
                      "Name": {
                        "fields": {
                          "firstName": {
                            "type": "string",
                            "id": 1,
                            "rule": "optional"
                          },
                          "lastName": {
                            "type": "string",
                            "id": 2,
                            "rule": "optional"
                          }
                        }
                      }
                    }
                  },
                  "GetPersonProfileRequest": {
                    "fields": {}
                  },
                  "GetPersonProfileResponse": {
                    "fields": {
                      "personToken": {
                        "type": "string",
                        "id": 1,
                        "rule": "optional"
                      },
                      "profile": {
                        "type": "squareup.bbfrontend.bankingweb.v1.Profile",
                        "id": 2,
                        "rule": "optional"
                      }
                    }
                  },
                  "UpdatePersonProfileRequest": {
                    "fields": {
                      "idempotenceKey": {
                        "type": "string",
                        "id": 1,
                        "rule": "optional"
                      },
                      "profile": {
                        "type": "squareup.bbfrontend.bankingweb.v1.Profile",
                        "id": 2,
                        "rule": "optional"
                      }
                    }
                  },
                  "UpdatePersonProfileResponse": {
                    "fields": {
                      "profile": {
                        "type": "squareup.bbfrontend.bankingweb.v1.Profile",
                        "id": 1,
                        "rule": "optional"
                      }
                    }
                  },
                  "PersonProfileService": {
                    "methods": {
                      "GetPersonProfile": {
                        "requestType": "squareup.bbfrontend.bankingweb.v1.GetPersonProfileRequest",
                        "responseType": "squareup.bbfrontend.bankingweb.v1.GetPersonProfileResponse"
                      },
                      "UpdatePersonProfile": {
                        "requestType": "squareup.bbfrontend.bankingweb.v1.UpdatePersonProfileRequest",
                        "responseType": "squareup.bbfrontend.bankingweb.v1.UpdatePersonProfileResponse"
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
 * SOURCE Profile @ squareup/bbfrontend/bankingweb/v1/person_profile_service.proto at 12:1
 */
export const Profile = $root.lookupType('squareup.bbfrontend.bankingweb.v1.Profile');
fixType(Profile);
Builder.createAndAttachToType(Profile);
/**
 * SOURCE Name @ squareup/bbfrontend/bankingweb/v1/person_profile_service.proto at 16:3
 */
Profile.Name = $root.lookupType('squareup.bbfrontend.bankingweb.v1.Profile.Name');
fixType(Profile.Name);
Builder.createAndAttachToType(Profile.Name);
/**
 * SOURCE GetPersonProfileRequest @ squareup/bbfrontend/bankingweb/v1/person_profile_service.proto at 22:1
 */
export const GetPersonProfileRequest = $root.lookupType('squareup.bbfrontend.bankingweb.v1.GetPersonProfileRequest');
fixType(GetPersonProfileRequest);
Builder.createAndAttachToType(GetPersonProfileRequest);
/**
 * SOURCE GetPersonProfileResponse @ squareup/bbfrontend/bankingweb/v1/person_profile_service.proto at 25:1
 */
export const GetPersonProfileResponse = $root.lookupType('squareup.bbfrontend.bankingweb.v1.GetPersonProfileResponse');
fixType(GetPersonProfileResponse);
Builder.createAndAttachToType(GetPersonProfileResponse);
/**
 * SOURCE UpdatePersonProfileRequest @ squareup/bbfrontend/bankingweb/v1/person_profile_service.proto at 30:1
 */
export const UpdatePersonProfileRequest = $root.lookupType('squareup.bbfrontend.bankingweb.v1.UpdatePersonProfileRequest');
fixType(UpdatePersonProfileRequest);
Builder.createAndAttachToType(UpdatePersonProfileRequest);
/**
 * SOURCE UpdatePersonProfileResponse @ squareup/bbfrontend/bankingweb/v1/person_profile_service.proto at 35:1
 */
export const UpdatePersonProfileResponse = $root.lookupType('squareup.bbfrontend.bankingweb.v1.UpdatePersonProfileResponse');
fixType(UpdatePersonProfileResponse);
Builder.createAndAttachToType(UpdatePersonProfileResponse);
/**
 * SOURCE PersonProfileService @ squareup/bbfrontend/bankingweb/v1/person_profile_service.proto at 42:1
 */
export const PersonProfileService = $root.lookupService('squareup.bbfrontend.bankingweb.v1.PersonProfileService');
