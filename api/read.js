import { procedure } from "../lib";

export default procedure(async (client, { path }) => {
  return await client.getFileContents(path, { format: "text" });
});
