import { createStore } from "vuex";
import data from '@/data';

export default createStore({
	state: {
		...data,
		authId: "VXjpr2WHa8Ux4Bnggym8QFLdv5C3",
	},
  getters: {
    authUser: state => {
			const user = state.users.find((user) => user.id === state.authId);
			
			if(!user) return null
			return {
				...user,
				// authUser.posts
				// authUser.getPosts()
				get posts() {
					return Object.values(state.posts).filter(
						(post) => post.userId === user.id
					);
				},
				// authUser.postsCount
				get postsCount() {
					return this.posts.length;
				},
				get threads() {
					return Object.values(state.threads).filter(
						(post) => post.userId === user.id
					);
				},
				get threadsCount() {
					return this.threads.length;
				},
			};
		}
  },
	actions: {
		createPost(context, post) {
			post.id = "random" + Math.random();

			context.commit("setPost", { post }); //Set the post

			context.commit("appendPostToThread", {
				postId: post.id,
				threadId: post.threadId,
			}); //Append post to thread
		},
	},
	mutations: {
		setPost(state, { post }) {
			state.posts.push(post);
		},
		appendPostToThread(state, { postId, threadId }) {
			const thread = state.threads.find((thread) => thread.id === threadId);
			thread.posts.push(postId);
		},
	},
});