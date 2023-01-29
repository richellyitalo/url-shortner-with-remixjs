import { Form } from "@remix-run/react";

import newUrlStyles from "./NewUrl.css";

export default function NewUrl() {
  return (
    <Form
      id="new-url-form"
      method="post"
    >
      <div className="form-group">
        <input
          type="email"
          className="form-control form-control-lg main-input"
          aria-describedby="emailHelp"
          placeholder="https://..."
        />
        <small className="form-text text-white">
          Provide a URL to be shortned.
        </small>
      </div>
    </Form>
  );
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: newUrlStyles,
    },
  ];
}
