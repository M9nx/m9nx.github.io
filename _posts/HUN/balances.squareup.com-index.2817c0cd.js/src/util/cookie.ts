export function get(name: string): undefined | string {
  if (document == null) return undefined;
  const cookies = document.cookie == null ? [] : document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const parts = cookie.split("=");
    if (parts[0] === name) {
      const value = parts.slice(1).join("=");
      value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
      return value;
    }
  }
}
