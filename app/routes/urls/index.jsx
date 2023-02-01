import { useLoaderData } from "@remix-run/react";
import UrlTableList, {
  links as urlTableListStyles,
} from "~/components/url/UrlTableList/UrlTableList";
import { getUrls } from "~/services/url";

// export async function action({ request }) {
//   const data = await request.formData();
//   return data;
// }

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
        {/* {isLoading && <Spinner />} */}
      </h4>

      <UrlTableList
        urls={urls}
        admin={true}
      />
    </>
  );
}
