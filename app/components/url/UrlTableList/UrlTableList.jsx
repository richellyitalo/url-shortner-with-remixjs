import RowUrl from './RowUrl';

const TableHead = () => (
  <thead>
    <tr>
      <th>title</th>
      <th>link</th>
      <th>target</th>
    </tr>
  </thead>
);

export default function UrlTableList({ urls }) {
  return (
    <>
      <table className="table">
        <TableHead />
        <tbody>
          {urls.map((url) => (
            <RowUrl
              key={url.id}
              url={url}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
