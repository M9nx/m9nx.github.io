import { init } from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

export const initializeSentry = (environment: string) => {
  // TODO(cvu): add sentry to router when useRoute is supported: https://github.com/getsentry/sentry-javascript/pull/5624
  init({
    dsn: "https://e9cc13fb4bcd4bd9b55f06a7898f7159@o160250.ingest.sentry.io/6707190",
    integrations: [new BrowserTracing()],
    attachStacktrace: true,
    environment,
  });
};
