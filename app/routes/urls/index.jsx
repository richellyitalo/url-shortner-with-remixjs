import { useLoaderData } from "@remix-run/react";
import UrlTableList, {
  links as urlTableListStyles,
} from "~/components/url/UrlTableList/UrlTableList";
import { deleteUrl, getUrls } from "~/services/url";

// export async function action({ request }) {
//   const data = await request.formData();
//   return data;
// }

const ACTION_DELETE = "delete";

export async function action({ request }) {
  const formData = await request.formData();
  const id = formData.get("id");

  switch (formData.get("type")) {
    case ACTION_DELETE:
      await deleteUrl(id);
      break;
  }

  return null;
}

export async function loader() {
  const urls = await getUrls();
  return { urls };
}

export function links() {
  return [...urlTableListStyles()];
}

export default function UrlIndexPage() {
  const { urls } = useLoaderData();

  return (
    <>
      <h4 className="text-center m-t-2">
        All Urls&nbsp;
      </h4>

      {urls.length === 0 ? (
        <div class="alert alert-warning">No one url saved.</div>
      ) : (
        <UrlTableList
          urls={urls}
          admin={true}
        />
      )}
    </>
  );
}
