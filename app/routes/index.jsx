import NewUrl, { links as newUrlStyles } from "~/components/url/NewUrl";
import UrlTableList, {
  links as UrlTableListStyles,
} from "~/components/url/UrlTableList/UrlTableList";

export function links() {
  return [...newUrlStyles(), ...UrlTableListStyles()];
}

export default function Index() {
  const urls = [
    {
      id: 1,
      title: "Title",
      target: "https://google.com",
      code: "fac33io",
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Title",
      target: "https://google.com",
      code: "fac33io",
      createdAt: new Date().toISOString(),
    },
  ];
  return (
    <>
      <NewUrl />

      <h4 className="text-center m-t-2">Last shortned urls</h4>
      <UrlTableList urls={urls} />
    </>
  );
}
