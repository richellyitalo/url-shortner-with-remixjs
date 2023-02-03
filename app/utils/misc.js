import uniqid from "uniqid";

export function generateToken() {
  return Buffer.from(uniqid.time()).toString("base64").slice(0, -1);
}

export function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}
