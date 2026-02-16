import { defineConfig } from "sanity"; 
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { codeInput } from "@sanity/code-input";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { structure } from './structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({ 
	name: "default",
	title: "Sane Kit Studio",
	projectId: projectId as string,
	dataset: dataset as string,
	basePath: '/studio',
	plugins: [
		structureTool({ structure }),
		visionTool(),
		codeInput(),
		unsplashImageAsset(),
	],
	schema: {
		types: schemaTypes,
	},
});