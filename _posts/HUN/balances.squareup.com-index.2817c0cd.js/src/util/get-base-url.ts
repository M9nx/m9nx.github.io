// "https://foo.bar.squareupstaging.com/baz" => "https://squareupstaging.com"
const BASE_URL = new URL(
  `${window.location.protocol}//${window.location.hostname.split(".").slice(-2).join(".")}`
);

export default BASE_URL;
