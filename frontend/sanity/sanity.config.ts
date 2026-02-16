import { defineConfig } from "sanity"; 
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { codeInput } from "@sanity/code-input";
import { structure } from './structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({ 
	name: "default",
	title: "Sane Kit Studio",
	projectId,
	dataset,
	basePath: "/studio",
	plugins: [
		structureTool({ structure }),
		visionTool(),
		codeInput(),
	],
	schema: {
		types: schemaTypes,
	},
});