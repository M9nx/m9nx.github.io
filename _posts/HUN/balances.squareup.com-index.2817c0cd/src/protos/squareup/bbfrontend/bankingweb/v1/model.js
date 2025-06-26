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
                  "OpenCardInvitation": {
                    "fields": {
                      "cardInvitationToken": {
                        "type": "string",
                        "id": 1,
                        "rule": "optional"
                      },
                      "name": {
                        "type": "string",
                        "id": 2,
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
 * person-scoped card invitation
 *
 * SOURCE OpenCardInvitation @ squareup/bbfrontend/bankingweb/v1/model.proto at 10:1
 */
export const OpenCardInvitation = $root.lookupType('squareup.bbfrontend.bankingweb.v1.OpenCardInvitation');
fixType(OpenCardInvitation);
Builder.createAndAttachToType(OpenCardInvitation);
