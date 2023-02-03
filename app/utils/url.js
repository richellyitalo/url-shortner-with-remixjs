import getEnv from "./get-env";

export function baseUrl(params = "") {
  const { BASE_URL } = getEnv();
  return BASE_URL + params;
}
