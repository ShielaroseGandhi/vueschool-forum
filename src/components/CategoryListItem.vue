<template>
  <div class="col-full">
    <ForumList 
      v-for="category in categories"
      :key="category.id"
      :forums="getForumsForCategory(category)"
      :title="category.name"
      :category-id="category.id"
    />
  </div>
</template>

<script>
import ForumList from "@/components/ForumList.vue";
import data from "@/data.json";

export default {
  components: {
    ForumList
  },
  props: {
    categories: {
      required: true,
      type: Array
    }
  },
  methods: {
    getForumsForCategory(category){
      return data.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>

<style>

</style>