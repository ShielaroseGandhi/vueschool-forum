<template>
  <ForumList 
    :title="category.name"
    :forums="getForumsForCategory(category)"    
  />
</template>

<script>
import ForumList from "@/components/ForumList";
import data from "@/data.json"
export default {
  components: {
    ForumList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    category(){
      return data.categories.find(category => category.id === this.id)
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