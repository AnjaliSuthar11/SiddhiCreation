import { u as projects } from "./site-DyhvXyU-.mjs";
import { U as notFound, g as createFileRoute, h as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-CXiH6Nq3.js
var $$splitComponentImporter = () => import("./projects._slug-ChH1zZvW.mjs");
var Route = createFileRoute("/projects/$slug")({
	loader: ({ params }) => {
		const project = projects.find((p) => p.slug === params.slug);
		if (!project) throw notFound();
		return { project };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Project not found" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { project } = loaderData;
		const title = `${project.name} — Siddhi On Creation`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: project.description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: project.description
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
