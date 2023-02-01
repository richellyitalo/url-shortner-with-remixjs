import RowUrl from "./RowUrl";
import styles from "./UrlTableList.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

const TableHead = ({ admin }) => (
  <thead>
    <tr>
      <th>LINK</th>
      <th>TARGET</th>
      <th>VISITS</th>
      {admin && <th width="150">ACTIONS</th>}
    </tr>
  </thead>
);

export default function UrlTableList({ urls, admin = false }) {
  return (
    <>
      <table
        id="url-table-list"
        className="table table-hover"
      >
        <TableHead admin={admin} />
        <tbody>
          {urls.map((url) => (
            <RowUrl
              key={url.id}
              url={url}
              admin={admin}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
