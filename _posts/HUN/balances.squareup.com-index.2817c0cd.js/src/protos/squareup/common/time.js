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
      "common": {
        "nested": {
          "time": {
            "nested": {
              "DateTime": {
                "fields": {
                  "instantUsec": {
                    "type": "int64",
                    "id": 1,
                    "rule": "optional"
                  },
                  "timezoneOffsetMin": {
                    "type": "sint32",
                    "id": 2,
                    "rule": "optional"
                  },
                  "posixTz": {
                    "type": "string",
                    "id": 3,
                    "rule": "optional"
                  },
                  "tzName": {
                    "type": "string",
                    "id": 4,
                    "rule": "repeated"
                  },
                  "ordinal": {
                    "type": "int64",
                    "id": 5,
                    "rule": "optional"
                  }
                }
              },
              "DateTimeInterval": {
                "fields": {
                  "inclusiveStart": {
                    "type": "squareup.common.time.DateTime",
                    "id": 1,
                    "rule": "optional"
                  },
                  "exclusiveEnd": {
                    "type": "squareup.common.time.DateTime",
                    "id": 2,
                    "rule": "optional"
                  }
                }
              },
              "YearMonth": {
                "fields": {
                  "year": {
                    "type": "int32",
                    "id": 1,
                    "rule": "optional"
                  },
                  "monthOfYear": {
                    "type": "int32",
                    "id": 2,
                    "rule": "optional"
                  }
                }
              },
              "YearMonthDay": {
                "fields": {
                  "year": {
                    "type": "int32",
                    "id": 1,
                    "rule": "optional"
                  },
                  "monthOfYear": {
                    "type": "int32",
                    "id": 2,
                    "rule": "optional"
                  },
                  "dayOfMonth": {
                    "type": "int32",
                    "id": 3,
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
 * Canonical representation for date/times where both UTC and
 * localtime must be representable and where localtime algebra, e.g.,
 * "same time yesterday", must computable.
 *
 * Draws from Joda-Time and the contents of the (never finalized)
 * Time-Zone/Timezone header draft spec
 * (http://tools.ietf.org/html/draft-sharhalakis-httptz-05)
 *
 * The RFC draft specs the first field, called instance_us below, to
 * be formatted as rfc3339, a string that does not include fractional
 * seconds. We generalize to an epoch-relative 64bit integer in
 * microseconds and store the timezone offset separately.
 *
 * We choose microseconds (usec) over milliseconds (msec) because on
 * mobile devices multiple things of interest can occur within the
 * same millisecond. The cost of usec over msec when the last three
 * digits are 0 is ~1 byte. The instance_us type is signed, to allow
 * for pre-epoch dates but not sint64 since virtually all dates should
 * be post-epoch.
 *
 * tz_names are defined in the tz database:
 *
 *   http://en.wikipedia.org/wiki/Tz_database
 *
 * Using an enum was considered, prototyped, and rejected: the version
 * of the database varies by platform and distribution and can't be
 * relied upon to be in sync with an enum.
 *
 * Storing the timezone offset is insufficient in the face of daylight
 * savings time, e.g., you can't represent "same hour of the day
 * yesterday". As long as tz_name is known, tz_offset is not needed
 * but tz_name is not always available. Joda-Time stores
 * timezone_offset as msec, which is a understandable since Joda
 * pretty much stores everything in msec. Storing it in usec (to be
 * the same as instance_usec) seems of little value since the current
 * most significant use is quarter hours.
 *
 * SOURCE DateTime @ squareup/common/time.proto at 45:1
 */
export const DateTime = $root.lookupType('squareup.common.time.DateTime');
fixType(DateTime);
Builder.createAndAttachToType(DateTime);
/**
 * SOURCE DateTimeInterval @ squareup/common/time.proto at 78:1
 */
export const DateTimeInterval = $root.lookupType('squareup.common.time.DateTimeInterval');
fixType(DateTimeInterval, {
  inclusiveStart: { required: true },
  exclusiveEnd: { required: true },
});
Builder.createAndAttachToType(DateTimeInterval);
/**
 * A representation of a particular month in a year without any
 * associated timezone information.
 *
 * Based on org.joda.time.YearMonth. Conceptually the fixed
 * precision makes this a useful construct for reporting and
 * mapping into external systems, but it cannot be effectively
 * used for computation. In other words, this is really an ID
 * that happens to look like a date.
 *
 * We've elided the concept of chronology because we do not have
 * a need to represent pre-Gregorian dates.
 *
 * SOURCE YearMonth @ squareup/common/time.proto at 96:1
 */
export const YearMonth = $root.lookupType('squareup.common.time.YearMonth');
fixType(YearMonth);
Builder.createAndAttachToType(YearMonth);
/**
 * A representation of a particular day in a year without any
 * associated timezone information.
 *
 * Similar to YearMonth and LocalDate in JodaTime. Note that,
 * YearMonthDay is deprecated in JodaTime in favor of LocalDate's
 * more thorough API. We chose to use YearMonthDay for naming
 * consistency and because the name is very representative of
 * the data format.
 *
 * SOURCE YearMonthDay @ squareup/common/time.proto at 120:1
 */
export const YearMonthDay = $root.lookupType('squareup.common.time.YearMonthDay');
fixType(YearMonthDay);
Builder.createAndAttachToType(YearMonthDay);
