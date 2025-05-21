import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import blogPost from "./schemaTypes/blogPost";

export default defineConfig({
  name: "default",
  title: "catcow-cms",
  projectId: "yu83al1c",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: [blogPost],
  },
});
