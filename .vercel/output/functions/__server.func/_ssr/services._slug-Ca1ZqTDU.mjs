import { d as services } from "./site-DyhvXyU-.mjs";
import { U as notFound, g as createFileRoute, h as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-Ca1ZqTDU.js
var $$splitComponentImporter = () => import("./services._slug-AlwgTRj3.mjs");
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = services.find((s) => s.slug === params.slug);
		if (!service) throw notFound();
		return { service };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Service Not Found" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { service } = loaderData;
		const title = `${service.title} | Siddhi On Creation`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: service.short
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: service.short
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
