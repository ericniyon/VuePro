<template>
  <div >
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// import AddBlog from './components/AddBlog.vue'
import ListBlogs from './components/ListBlogs.vue'
import Header from './components/Header.vue'


export default {
  components:{
    'list-blog':ListBlogs,
    'app-header':Header
  },

  data () {
    return {

    }
  }
}
</script>

<style >

body{
  margin: 0;
  font-family: 'Nunito SemiBold'
}
</style>
