import { baseUrl } from '~/utils/url';

const RowUrl = ({ url: { id, title, target, code } }) => (
  <tr>
    <td>{title}</td>
    <td>{target}</td>
    <td>{baseUrl(code)}</td>
  </tr>
);

export default RowUrl;
