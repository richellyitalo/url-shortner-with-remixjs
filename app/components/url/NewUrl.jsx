import { Form, useNavigation } from "@remix-run/react";
import { useRef, useEffect } from 'react';

import newUrlStyles from "./NewUrl.css";

export default function NewUrl({errors, fields}) {
  const navigation = useNavigation();

  const isAdding = navigation.state === 'submitting' && 
    !!navigation.formAction;

  const formRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    if (!isAdding) {
      formRef.current?.reset();
      inputRef.current?.focus()
    }
  }, [isAdding]);

  return (
    <Form
      method="post"
      action="/?index"
      ref={formRef}
    >
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            name="url"
            className="form-control form-control-lg main-input"
            placeholder="https://..."
            defaultValue={fields?.url}
            ref={inputRef}
          />
          <button
            className="btn btn-primary"
            type="submit"
            id="button-addon2"
            disabled={isAdding}
          >
            {isAdding ? 'Shortening' : 'Shorten'}
          </button>
        </div>
          {errors?.url && (
            <div className  ="alert alert-danger">{errors?.url}</div>
          )}
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
