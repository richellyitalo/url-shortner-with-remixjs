import NewUrl from "~/components/url/NewUrl";
import UrlTableList from "~/components/url/UrlTableList/UrlTableList";

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

      <h4 className="text-center">Last shortned urls</h4>
      <UrlTableList urls={urls} />
    </>
  );
}
