import { createStore } from "vuex";
import data from '@/data';

export default createStore({
  state: data,
  actions: {
    createPost(context, post){
      post.id = "random" + Math.random();

      context.commit('setPost', { post }); //Set the post

			context.commit("appendPostToThread", { postId: post.id, threadId: post.threadId }); //Append post to thread
    }
  },
  mutations: {
    setPost(state, { post }){
      state.posts.push(post); 
    },
    appendPostToThread( state, { postId, threadId } ){
      const thread = state.threads.find(thread => thread.id === threadId)
      thread.posts.push(postId)
    }
  }
})