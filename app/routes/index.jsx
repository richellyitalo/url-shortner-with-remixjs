import { json, redirect } from "@remix-run/node";
import { useActionData, useLoaderData, useNavigation } from "@remix-run/react";
import Spinner from "~/components/ui/Spinner";
import NewUrl, { links as newUrlStyles } from "~/components/url/NewUrl";
import UrlTableList, {
  links as UrlTableListStyles,
} from "~/components/url/UrlTableList/UrlTableList";
import axios from "axios";

import { createUrl, getUrls } from "~/services/url";

export function links() {
  return [...newUrlStyles(), ...UrlTableListStyles()];
}

export async function loader() {
  const urls = await getUrls(5);
  return { urls };
}

// export async function action(data) {
//   console.log(data)
//   const response = await data.request.formData();
//   console.log(response);
//   return redirect('/');
// }

export async function action({ request }) {
  const { url } = Object.fromEntries(await request.formData());

  const fields = { url };

  const [errors, urlEntity] = await createUrl(fields);
  if (errors) {
    return json({ errors, fields });
  }

  return redirect("/");
}

// main
export default function IndexPage() {
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <>
      <NewUrl
        errors={actionData?.errors}
        fields={actionData?.fields}
      />

      <h4 className="text-center m-t-2">
        Last shortned urls&nbsp;
        {isLoading && <Spinner />}
      </h4>

      <UrlTableList urls={loaderData.urls} />
    </>
  );
}
