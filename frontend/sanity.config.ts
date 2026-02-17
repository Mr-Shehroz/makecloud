import { defineConfig } from "sanity"; 
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "../studio/schemaTypes";
import { codeInput } from "@sanity/code-input";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { structure } from '../studio/structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "yk6vsu9p";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

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
		unsplashImageAsset(),
	],
	schema: {
		types: schemaTypes,
	},
});