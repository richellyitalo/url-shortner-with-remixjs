import { json, redirect } from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { getUrlById, updateUrl } from "~/services/url";

export async function action({ request, params }) {
  let fields = Object.fromEntries(await request.formData());
  fields["id"] = params.id;
  const [errors, urlEntity] = await updateUrl(fields);

  if (errors) {
    return json({
      errors,
    });
  }

  return redirect("/urls");
}

export async function loader({ params }) {
  const url = await getUrlById(params.id);
  console.log(url)
  return { url };
}

export default function EditUrlPage() {
  const { url } = useLoaderData();
  const actionData = useActionData();
  const { state } = useNavigation();

  const isAdding = state === "submitting";

  return (
    <div>
      <h3>Edit page</h3>

      <Form method="post">
        <input
          type="hidden"
          name="id"
        />
        <div className="mb-3">
          <label
            htmlFor="input-url"
            className="form-label"
          >
            URL
          </label>
          <input
            type="text"
            id="input-url"
            name="url"
            className="form-control"
            defaultValue={url?.url}
            autocomplete="off"
          />
        </div>

        {actionData?.errors?.url && (
          <div className="alert alert-danger">{actionData.errors.url}</div>
        )}

        <div className="mb-3">
          <label className="form-label">Code</label>
          <input
            type="text"
            className="form-control"
            disabled={true}
            value={url.code}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Visits</label>
          <input
            type="text"
            className="form-control"
            disabled={true}
            value={url.visits}
          />
        </div>

        <button
          className="btn btn-primary"
          type="submit"
          id="button-addon2"
          name="intent"
          value="update"
          disabled={isAdding}
        >
          {isAdding ? "...Updating" : "Update"}
        </button>
      </Form>
    </div>
  );
}
