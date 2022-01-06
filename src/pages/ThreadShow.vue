<template>
	<div class="col-large push-top">
		<h1>{{ thread.title }}</h1>

		<PostList :posts="threadPosts"/>

	</div>
</template>

<script>
import data from "@/data.json";
import PostList from "@/components/PostList"

export default {
	name: 'ThreadShow',
	components: {
		PostList
	},
  props: {
    id: {
      required: true,
      type: String
    }
  },
	data() {
		return {
			threads: data.threads,
			posts: data.posts,
		};
	},
  computed: {
    thread(){
      return this.threads.find(thread => thread.id === this.id) //also available at this.$route.params.id
    },
		threadPosts(){
			return this.posts.filter(post => post.threadId === this.id)
		}
  },
};
</script>
