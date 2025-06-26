/**
 * GENERATED CODE – DO NOT EDIT!
 */
/* eslint-disable */
import * as $protobuf from 'protobufjs/light';
import { fixType } from '../../../../Fixes';
import Builder from '../../../../Builder';
import './model';

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
                  "ListOpenCardInvitationsRequest": {
                    "fields": {}
                  },
                  "ListOpenCardInvitationsResponse": {
                    "fields": {
                      "openCardInvitations": {
                        "type": "squareup.bbfrontend.bankingweb.v1.OpenCardInvitation",
                        "id": 1,
                        "rule": "repeated"
                      },
                      "error": {
                        "type": "squareup.bbfrontend.bankingweb.v1.ListOpenCardInvitationsResponse.ListOpenCardInvitationsError",
                        "id": 2,
                        "rule": "repeated"
                      }
                    },
                    "nested": {
                      "ListOpenCardInvitationsError": {
                        "values": {
                          "LIST_OPEN_CARD_INVITATIONS_ERROR_UNKNOWN": 0,
                          "LIST_OPEN_CARD_INVITATIONS_ERROR_UNAUTHORIZED": 1
                        }
                      }
                    }
                  },
                  "BankingWebService": {
                    "methods": {
                      "ListOpenCardInvitations": {
                        "requestType": "squareup.bbfrontend.bankingweb.v1.ListOpenCardInvitationsRequest",
                        "responseType": "squareup.bbfrontend.bankingweb.v1.ListOpenCardInvitationsResponse"
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
 * SOURCE ListOpenCardInvitationsRequest @ squareup/bbfrontend/bankingweb/v1/service.proto at 20:1
 */
export const ListOpenCardInvitationsRequest = $root.lookupType('squareup.bbfrontend.bankingweb.v1.ListOpenCardInvitationsRequest');
fixType(ListOpenCardInvitationsRequest);
Builder.createAndAttachToType(ListOpenCardInvitationsRequest);
/**
 * SOURCE ListOpenCardInvitationsResponse @ squareup/bbfrontend/bankingweb/v1/service.proto at 22:1
 */
export const ListOpenCardInvitationsResponse = $root.lookupType('squareup.bbfrontend.bankingweb.v1.ListOpenCardInvitationsResponse');
fixType(ListOpenCardInvitationsResponse);
Builder.createAndAttachToType(ListOpenCardInvitationsResponse);
/**
 * SOURCE ListOpenCardInvitationsError @ squareup/bbfrontend/bankingweb/v1/service.proto at 26:3
 */
ListOpenCardInvitationsResponse.ListOpenCardInvitationsError = $root.lookupEnum('squareup.bbfrontend.bankingweb.v1.ListOpenCardInvitationsResponse.ListOpenCardInvitationsError').values;
/**
 * SOURCE BankingWebService @ squareup/bbfrontend/bankingweb/v1/service.proto at 12:1
 */
export const BankingWebService = $root.lookupService('squareup.bbfrontend.bankingweb.v1.BankingWebService');
