import { procedure } from "../lib";

export default procedure(async (client, { path, text }) => {
  await client.putFileContents(path, text);
});
