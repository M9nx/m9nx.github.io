/**
 * GENERATED CODE – DO NOT EDIT!
 */
/* eslint-disable */
import * as $protobuf from 'protobufjs/light';
import { fixType } from '../../../../Fixes';
import Builder from '../../../../Builder';
import '../../../common/location';

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
                  "GetOrCreateComplianceVerificationRequest": {
                    "fields": {
                      "cardInvitationToken": {
                        "type": "string",
                        "id": 1,
                        "rule": "optional"
                      },
                      "globalAddress": {
                        "type": "squareup.common.location.GlobalAddress",
                        "id": 2,
                        "rule": "optional"
                      }
                    }
                  },
                  "GetOrCreateComplianceVerificationResponse": {
                    "fields": {
                      "result": {
                        "type": "squareup.bbfrontend.bankingweb.v1.GetOrCreateComplianceVerificationResponse.ComplianceResult",
                        "id": 1,
                        "rule": "optional"
                      }
                    },
                    "nested": {
                      "ComplianceResult": {
                        "values": {
                          "COMPLIANCE_RESULT_UNKNOWN": 0,
                          "COMPLIANCE_RESULT_PASSED": 1,
                          "COMPLIANCE_RESULT_FAILED": 2
                        }
                      }
                    }
                  },
                  "BankingWebComplianceService": {
                    "methods": {
                      "GetOrCreateComplianceVerification": {
                        "requestType": "squareup.bbfrontend.bankingweb.v1.GetOrCreateComplianceVerificationRequest",
                        "responseType": "squareup.bbfrontend.bankingweb.v1.GetOrCreateComplianceVerificationResponse"
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
 * SOURCE GetOrCreateComplianceVerificationRequest @ squareup/bbfrontend/bankingweb/v1/compliance_service.proto at 19:1
 */
export const GetOrCreateComplianceVerificationRequest = $root.lookupType('squareup.bbfrontend.bankingweb.v1.GetOrCreateComplianceVerificationRequest');
fixType(GetOrCreateComplianceVerificationRequest);
Builder.createAndAttachToType(GetOrCreateComplianceVerificationRequest);
/**
 * SOURCE GetOrCreateComplianceVerificationResponse @ squareup/bbfrontend/bankingweb/v1/compliance_service.proto at 24:1
 */
export const GetOrCreateComplianceVerificationResponse = $root.lookupType('squareup.bbfrontend.bankingweb.v1.GetOrCreateComplianceVerificationResponse');
fixType(GetOrCreateComplianceVerificationResponse);
Builder.createAndAttachToType(GetOrCreateComplianceVerificationResponse);
/**
 * SOURCE ComplianceResult @ squareup/bbfrontend/bankingweb/v1/compliance_service.proto at 27:3
 */
GetOrCreateComplianceVerificationResponse.ComplianceResult = $root.lookupEnum('squareup.bbfrontend.bankingweb.v1.GetOrCreateComplianceVerificationResponse.ComplianceResult').values;
/**
 * SOURCE BankingWebComplianceService @ squareup/bbfrontend/bankingweb/v1/compliance_service.proto at 13:1
 */
export const BankingWebComplianceService = $root.lookupService('squareup.bbfrontend.bankingweb.v1.BankingWebComplianceService');
