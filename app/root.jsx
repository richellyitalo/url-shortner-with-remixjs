import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import MainNavigation, {
  links as mainNavigationStyles,
} from "~/components/nav/MainNavigation";

import mainStyles from '~/styles/main.css';

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => [
  ...mainNavigationStyles(),
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
  },
  {
    rel: 'stylesheet',
    href: mainStyles
  }
];

export const loader = () =>
  json({
    ENV: { ...getBrowserEnvironment() },
  });

function getBrowserEnvironment() {
  const env = process.env;

  return {
    BASE_URL: env.BASE_URL,
  };
}

export default function App() {
  const data = useLoaderData();

  return (
    <html lang="pt-BR">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="root-top">
          <h1 className="text-center text-white">Remix Shortner 🩳</h1>
        </div>
        <div className="container">
          <MainNavigation />
          <Outlet />
        </div>
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
