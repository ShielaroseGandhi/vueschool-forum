import Home from "@/pages/Home";
import Forum from "@/pages/Forum";
import Category from "@/pages/Category";
import ThreadShow from "@/pages/ThreadShow";
import NotFound from "@/pages/NotFound"
import { createRouter, createWebHistory } from "vue-router";
import data from "@/data.json"

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/category/:id",
		name: "Category",
		component: Category,
		props: true,
	},
	{
		path: "/forum/:id",
		name: "Forum",
		component: Forum,
		props: true,
	},
	{
		path: "/thread/:id",
		name: "ThreadShow",
		component: ThreadShow,
		props: true,
		beforeEnter(to, from, next) {
			// Check if the thread exists
			const threadExists = data.threads.find(
				(thread) => thread.id === to.params.id
			);
			// if exists, continue
			if (threadExists) {
				return next();
			} else {
				// if not, redirect to the not found page
				// substring removes the first initial '/' from the url so we can avoid having two slashes at the beginning of the path
				next({
					name: "NotFound",
					params: { pathMatch: to.path.substring(1).split("/") },
					// preserve existing query and hash
					query: to.query,
					hash: to.hash,
				});
			}
		},
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: NotFound,
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
