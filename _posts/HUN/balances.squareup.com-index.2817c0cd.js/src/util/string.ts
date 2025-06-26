// DO NOT EDIT! This is copy and pasted from dashboard
// frontend/@banking/ui/addon/utils/string.ts
// TODO(cvu): eventually import this from dashboard via bazel

// Regular expression initially extracted from lodash. Treat with skepticism.
const EMOJI_PATTERN =
  // eslint-disable-next-line no-misleading-character-class
  /[\u2700-\u27BF]|(?:\uD83C[\uDDE6-\uDDFF]){2}|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\u0023-\u0039]\uFE0F?\u20E3|\u3299|\u3297|\u303D|\u3030|\u24C2|\uD83C[\uDD70\uDD71]|\uD83C[\uDD7E\uDD7F]|\uD83C\uDD8E|\uD83C[\uDD91-\uDD9A]|\uD83C[\uDDE6-\uDDFF]|[\uD83C\uDE01\uDE02]|\uD83C\uDE1A|\uD83C\uDE2F|[\uD83C\uDE32-\uDE3A]|[\uD83C\uDE50\uDE51]|\u203C|\u2049|[\u25AA\u25AB]|\u25B6|\u25C0|[\u25FB-\u25FE]|\u00A9|\u00AE|\u2122|\u2139|\uD83C\uDC04|[\u2600-\u26FF]|\u2B05|\u2B06|\u2B07|\u2B1B|\u2B1C|\u2B50|\u2B55|\u231A|\u231B|\u2328|\u23CF|[\u23E9-\u23F3]|[\u23F8-\u23FA]|\uD83C\uDCCF|\u2934|\u2935|[\u2190-\u21FF]|\uFE0F|\u200D/g;

export function stripEmoji(input: string): string {
  return `${input}`.replace(EMOJI_PATTERN, "");
}

export function containsEmoji(input: string): boolean {
  return input.match(EMOJI_PATTERN) !== null;
}
