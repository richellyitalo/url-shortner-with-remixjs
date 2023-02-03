import { generateToken, isValidUrl } from "~/utils/misc";
import api from "./api";

export async function getUrls(limit = null, sort = "id", order = "desc") {
  let urlToRequest = `urls?_sort=${sort}&_order=${order}`;

  if (limit !== null) {
    urlToRequest += `&_limit=${limit}`;
  }

  const response = await api.get(urlToRequest);

  return response.data;
}

export async function createUrl(urlData) {
  const { url } = urlData;

  let errors = {};

  if (!isValidUrl(url)) {
    errors["url"] = "URL is invalid.";
  }

  if (Object.values(errors).length > 0) {
    return [errors, undefined];
  }

  const payload = {
    url,
    code: generateToken(),
    visits: 0,
    createdAt: new Date().toISOString(),
  };

  const response = await api.post("urls", payload);

  return [undefined, response.data];
}

export async function updateUrl(urlData) {
  const { url, visits } = urlData;

  let errors = {};

  if (!isValidUrl(url)) {
    errors["url"] = "URL is invalid.";
  }

  if (Object.values(errors).length > 0) {
    return [errors, undefined];
  }

  const payload = {
    url,
    visits
  };

  const response = await api.patch(`urls/${urlData.id}`, payload);

  return [undefined, response.data];
}

export async function getUrlByCode(code) {
  const response = await api.get(`urls?code=${code}`);

  return !response.data ? null : response.data[0];
}

export async function getUrlById(id) {
  const response = await api.get(`urls/${id}`);
  return !response.data ? null : response.data;
}

export async function deleteUrl(id) {
  return await api.delete(`urls/${id}`);
}
