import { Form } from "@remix-run/react";

export default function NewUrl () {
    return (
        <Form method="post">
            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="https://..."
                />
                <small
                    className="form-text text-muted"
                >
                    Provide a URL to be shortned.
                </small>
            </div>
        </Form>
    )
}