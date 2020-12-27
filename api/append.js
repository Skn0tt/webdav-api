import { procedure } from "../lib";

export default procedure(async (client, { path, text }) => {
  const oldFile = await client.getFileContents(path, { format: "text" });

  const newFile = oldFile + "\n" + text;

  await client.putFileContents(path, newFile);
});
