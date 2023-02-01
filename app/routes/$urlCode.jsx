import { json, redirect, Response } from "@remix-run/node";
import { getUrlByCode, updateUrl } from "~/services/url";

export async function loader({ params }) {
  const url = await getUrlByCode(params.urlCode);

  if (!url) {
    throw json(
      {
        message: "Sorry! Url shorten not found.",
      },
      {
        status: 404,
        statusText: "Url shorten not found.",
      }
    );
  }

  url.visits++;

  const urlUpdated = await updateUrl(url);
  if (!urlUpdated) {
    throw json(
      {
        message: "Sorry! An internal problem occurred.",
      },
      {
        status: 500,
        statusText: "An internal problem occurred.",
      }
    );
  }

  return redirect(url.url);
}

export default function CodeUrlRedirectPage() {
  return (
    <>
      <h3>Redirect</h3>
    </>
  );
}
