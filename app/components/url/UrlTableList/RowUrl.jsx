import { Link } from "@remix-run/react";
import { baseUrl } from "~/utils/url";

const ColumnAdmin = () => {
  return (
    <td>
      <button className="btn btn-primary btn-sm">Editar</button>
      &nbsp;
      <button className="btn btn-danger btn-sm">Excluir</button>
    </td>
  );
};

const RowUrl = ({ url: { visits, url, code }, admin }) => (
  <tr>
    <td>
      <Link
        to={`/${code}`}
        target="_blank"
      >
        {baseUrl(code)}
      </Link>
    </td>
    <td>{url}</td>
    <td>{visits}</td>

    {admin && <ColumnAdmin />}
  </tr>
);

export default RowUrl;
