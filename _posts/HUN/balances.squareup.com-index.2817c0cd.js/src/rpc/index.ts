import { get as getCookie } from "../util/cookie";
import type { Method, Message, RPCImpl, RPCImplCallback, rpc } from "protobufjs";
import BASE_URL from "/src/util/get-base-url";

// TODO(steckel): Use api subdomain and standardized path GRPC

// https://github.com/protobufjs/protobuf.js/#using-services
/* eslint-disable @typescript-eslint/ban-types */
export default <FetchInterface extends typeof fetch>(fetch: FetchInterface): RPCImpl =>
  (
    method: Method | rpc.ServiceMethod<Message<{}>, Message<{}>>,
    requestData: Uint8Array,
    callback: RPCImplCallback
  ) => {
    /* eslint-enable @typescript-eslint/ban-types */
    if (typeof method === "function") {
      return method;
    }
    const headers = new Headers();
    headers.append("Accept", "application/x-protobuf");
    headers.append("Content-Type", "application/x-protobuf");
    const csrfValue = getCookie("_js_csrf");
    if (csrfValue != null) {
      headers.append("X-CSRF-Token", csrfValue);
    }
    const path = `/services/${fullyQualifiedMethodName(method)}`;
    const grpcMethodUrl = new URL(path, BASE_URL);
    const request = new Request(grpcMethodUrl.toString(), {
      body: requestData,
      credentials: "include",
      headers,
      method: "POST",
      mode: "cors",
    });

    fetch(request)
      .then(fetchHandler(callback))
      .then((buffer: ArrayBuffer) => new Uint8Array(buffer))
      .then((message: Uint8Array) => callback(null, message))
      .catch((error: Error) => callback(error, null));
  };

const fetchHandler = (callback: RPCImplCallback) => (response: Response) => {
  if (!response.ok) {
    callback(new Error(`HTTP Response ${response.status}`), null);
  }
  return response.arrayBuffer();
};

// TODO(steckel): assert on parent being non-null
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const fullyQualifiedMethodName = (method: Method): string =>
  `${method.parent!.fullName.slice(1)}/${method.name}`;
/* eslint-enable @typescript-eslint/no-non-null-assertion */
