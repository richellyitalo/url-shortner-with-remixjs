import { Link, useSubmit } from "@remix-run/react";
import { useState } from "react";
import { baseUrl } from "~/utils/url";

const ColumnAdmin = ({ id }) => {
  const submit = useSubmit();
  const [isLoading, setLoading] = useState(false);

  const handleClickDelete = () => {
    if (confirm("Do you really want REMOVE this Shortened URL?")) {
      setLoading(true);
      submit({ id: id, type: "delete" }, { method: "post", action: "/urls/" });
    }
  };

  return (
    <td>
      <Link
        className="btn btn-primary btn-sm"
        disabled={isLoading}
        to={`/urls/edit/${id}`}
      >
        Editar
      </Link>
      &nbsp;
      <button
        className="btn btn-link btn-danger btn-sm button-delete"
        onClick={handleClickDelete}
        disabled={isLoading}
      >
        {isLoading ? "Excluindo" : "Excluir"}
      </button>
    </td>
  );
};

const RowUrl = ({ url: { id, visits, url, code }, admin }) => (
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

    {admin && <ColumnAdmin id={id} />}
  </tr>
);

export default RowUrl;
