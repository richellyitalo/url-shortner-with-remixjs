import RowUrl from './RowUrl';
import styles from './UrlTableList.css';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

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
      <table id="url-table-list" className="table table-hover">
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
