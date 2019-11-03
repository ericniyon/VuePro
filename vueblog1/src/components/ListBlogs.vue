<template>
  <div id="show-blogs" >
  <h1>All Created Blogs</h1>
  <!-- <b-form-input type="text" v-model="search" placeholder="search box"></b-form-input> -->
  <div v-for="blog in filteredBlogs"  class="single">
    <router-link v-bind:to=" '/blog/' +blog.id "><h2> {{ blog.title | to-upercase}} </h2></router-link>
    <article class="article">
      {{blog.content | sinppit}}
    </article>
  </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      blogs:[],
      search:''
    }
  },
  method:{

  },
  created(){
    this.$http.get('http://vuejsdatabasetest.firebaseio.com/posts.json').then(function(data){
      return data.json();
      // this.blogs = data.body.slice(0,20);
    }).then(function(data){
      var blogsArray=[];

      for (let key in data){
        data[key].id = key
        blogsArray.push(data[key]);

      }
      this.blogs = blogsArray;
      // console.log(data);
    })





  },
  computed:{
    filteredBlogs:function() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    }
  }
}
</script>

<style >
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}

.single{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

</style>
