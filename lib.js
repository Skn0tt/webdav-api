const { createClient } = require("webdav");

export function procedure(doIt) {
  return async function requestHandler(req, res) {
    const { webdav_url, webdav_username, webdav_password } = req.body;

    const client = createClient(webdav_url, {
      username: webdav_username,
      password: webdav_password,
    });

    const { status = 200, body = undefined } =
      (await doIt(client, req.body)) ?? {};

    res.status(status).end(body);
  };
}